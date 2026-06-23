"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)',
          animation: 'blob1 6s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '40%',
          right: '-15%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(29,78,216,0.28) 0%, transparent 70%)',
          animation: 'blob2 8s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '30%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(71,85,105,0.35) 0%, transparent 70%)',
          animation: 'blob3 10s ease-in-out infinite',
        }}
      />
      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(80px, 60px) scale(1.1); }
          66% { transform: translate(-40px, 80px) scale(0.95); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-60px, 80px) scale(1.05); }
          66% { transform: translate(80px, -40px) scale(1.1); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(60px, -80px) scale(0.95); }
          66% { transform: translate(-80px, 40px) scale(1.08); }
        }
      `}</style>
    </div>
  );
}