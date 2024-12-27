
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
       <h2>Inner join</h2>
        {children}
      </>
      );
  }