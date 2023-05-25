const formatRupiah = (harga: any) => {
  return harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export default formatRupiah;
