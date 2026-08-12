---
name: I_BR_NFDOCUMENT
description: "BR Nfdocument"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - document
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFDOCUMENT

**BR Nfdocument**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NotaFiscal` | ✓ | |  | `cast(j_1bnfdoc.docnum as logbr_docnum preserving type)` |  |  |
| `BR_NFPartnerFunction` |  | |  | `parvw` |  |  |
| `BR_NFPartner` |  | |  | `parid` |  |  |
| `BR_NFPartnerName1` |  | |  | `name1` |  |  |
| `BR_NFPartnerName2` |  | |  | `name2` |  |  |
| `BR_NFPartnerName3` |  | |  | `name3` |  |  |
| `BR_NFPartnerName4` |  | |  | `name4` |  |  |
| `PartnerIsOneTimeAccount` |  | |  | `parxcpdk` |  |  |
| `BR_NFPartnerType` |  | |  | `cast(j_1bnfdoc.partyp as logbr_nfpartnertype preserving type)` |  |  |
| `BR_NFPartnerStreetName` |  | |  | `stras` |  |  |
| `BusinessPartnerHouseNumber` |  | |  | `house_num1` |  |  |
| `BPHsNmbrSuplmntTxt` |  | |  | `house_num2` |  |  |
| `BR_NFPartnerCityName` |  | |  | `ort01` |  |  |
| `BR_NFPartnerRegionCode` |  | |  | `regio` |  |  |
| `BR_NFPartnerDistrictName` |  | |  | `ort02` |  |  |
| `BR_NFPartnerCountryCode` |  | |  | `land1` |  |  |
| `BR_NFPartnerPostalCode` |  | |  | `pstlz` |  |  |
| `BR_NFPartnerIsNaturalPerson` |  | |  | `cast(j_1bnfdoc.stkzn as logbr_nfnaturalperson preserving type)` |  |  |
| `BR_NFPartnerCNPJ` |  | |  | `cast(case when j_1bnfdoc.cgc > '99999999999999' then '00000000000000' else j_1bnfdoc.cgc end as logbr_cnpj_numc )` |  |  |
| `BR_NFPartnerCNPJ_2` |  | |  | `cast(j_1bnfdoc.cgc as logbr_nfpartnercnpj preserving type)` |  |  |
| `BR_NFPartnerCPF` |  | |  | `cast(j_1bnfdoc.cpf as logbr_nfpartnercpf preserving type)` |  |  |
| `PhoneNumber` |  | |  | `telf1` |  |  |
| `BR_NFPartnerStateTaxNumber` |  | |  | `stains` |  |  |
| `BR_NFPartnerMunicipalTaxNumber` |  | |  | `munins` |  |  |
| `BR_NFPartnerStateTaxNumberST` |  | |  | `iest_partner` |  |  |
| `BR_NFPartnerCNAE` |  | |  | `cnae_partner` |  |  |
| `BR_NFPartnerTaxRegimenCode` |  | |  | `crt_partner` |  |  |
| `BR_PartnerCFOPCategory` |  | |  | `indust` |  |  |
| `BR_SUFRAMACode` |  | |  | `isuf` |  |  |
| `BR_SPEDTaxCategory` |  | |  | `itmf_pco_category` |  |  |
| `ReportingIncgOrOutgDate` |  | |  | `itmf_repdat` |  |  |
| `BR_NFPartnerTaxJurisdiction` |  | |  | `txjcd` |  |  |
| `BR_NFObservationText` |  | |  | `observat` |  |  |
| `MeansOfTransportType` |  | |  | `cast(j_1bnfdoc.traty as logbr_traty preserving type)` |  |  |
| `MeansOfTransport` |  | |  | `cast(j_1bnfdoc.traid as logbr_traid preserving type)` |  |  |
| `IncotermsClassification` |  | |  | `inco1` |  |  |
| `IncotermsTransferLocation` |  | |  | `inco2` |  |  |
| `ShippingPoint` |  | |  | `vstel` |  |  |
| `BR_NFShippingUnitBrand` |  | |  | `cast(j_1bnfdoc.shpmrk as logbr_shpmrk preserving type)` |  |  |
| `BR_NFShippingUnitNumber` |  | |  | `cast(j_1bnfdoc.shpnum as logbr_shpnum preserving type)` |  |  |
| `BR_NFNumberOfPackages` |  | |  | `cast(j_1bnfdoc.anzpk as logbr_anzpk preserving type)` |  |  |
| `BR_NFShippingUnit` |  | |  | `cast(j_1bnfdoc.shpunt as logbr_shpunt preserving type)` |  |  |
| `BR_NFArrivalOrDepartureDate` |  | |  | `dsaient` |  |  |
| `HeaderWeightUnit` |  | |  | `gewei` |  |  |
| `HeaderNetWeight` |  | |  | `cast(j_1bnfdoc.ntgew as logbr_ntgew_15 preserving type)` |  |  |
| `HeaderGrossWeight` |  | |  | `cast(j_1bnfdoc.brgew as logbr_brgew_15 preserving type)` |  |  |
| `BR_NFArrivalOrDepartureTime` |  | |  | `cast(j_1bnfdoc.hsaient as logbr_dep_arr_time preserving type)` |  |  |
| `BR_WhldgICMSForTranspCFOP` |  | |  | `cast(j_1bnfdoc.rettransp_cfop as logbr_transport_whldg_cfop preserving type)` |  |  |
| `BR_WhldgICMSForTranspCity` |  | |  | `rettransp_cmunfg` |  |  |
| `CreatedByUser` |  | |  | `cast(j_1bnfdoc.crenam as logbr_crenam preserving type)` |  |  |
| `CreationDate` |  | |  | `cast(j_1bnfdoc.credat as logbr_credat preserving type)` |  |  |
| `CreationTime` |  | |  | `cast(j_1bnfdoc.cretim as logbr_cretim preserving type)` |  |  |
| `LogicalSystem` |  | |  | `cast(j_1bnfdoc.awsys as logbr_logsystem preserving type)` |  |  |
| `LastChangedByUser` |  | |  | `cast(j_1bnfdoc.chanam as logbr_chanam preserving type)` |  |  |
| `LastChangeDate` |  | |  | `cast(j_1bnfdoc.chadat as logbr_chadat preserving type)` |  |  |
| `LastChangeTime` |  | |  | `cast(j_1bnfdoc.chatim as logbr_chatim preserving type)` |  |  |
| `PaymentTerms` |  | |  | `cast(j_1bnfdoc.zterm as logbr_dzterm preserving type)` |  |  |
| `BR_NFIsPrinted` |  | |  | `cast(j_1bnfdoc.printd as logbr_nfprinted preserving type)` |  |  |
| `BR_NFIsCreatedManually` |  | |  | `cast(j_1bnfdoc.manual as logbr_manual preserving type)` |  |  |
| `BR_NFIsIncomingIssdByCust` |  | |  | `entrad` |  |  |
| `BR_NFIsCanceled` |  | |  | `cast(j_1bnfdoc.cancel as logbr_nfcancelled preserving type)` |  |  |
| `BR_NFIsChargingInvoice` |  | |  | `cast(j_1bnfdoc.fatura as logbr_nffatura preserving type)` |  |  |
| `BR_NFDirection` |  | |  | `cast(j_1bnfdoc.direct as logbr_nfdirection preserving type)` |  |  |
| `BR_NFType` |  | |  | `cast(j_1bnfdoc.nftype as logbr_nftype preserving type)` |  |  |
| `BR_NFDocumentType` |  | |  | `cast(j_1bnfdoc.doctyp as logbr_nfdocumenttype preserving type)` |  |  |
| `BR_NFModel` |  | |  | `cast(j_1bnfdoc.model as logbr_model preserving type)` |  |  |
| `BR_NFNumber` |  | |  | `cast(ltrim(j_1bnfdoc.nfnum, '0') as logbr_nfnumb)` |  |  |
| `BR_NFSeries` |  | |  | `cast(j_1bnfdoc.series as logbr_nf_series preserving type)` |  |  |
| `BR_NFSubSeries` |  | |  | `subser` |  |  |
| `BR_NFSituationCode` |  | |  | `cod_sit` |  |  |
| `BR_NFIssuedBy` |  | |  | `cast(j_1bnfdoc.ind_emit as logbr_nfissuer preserving type)` |  |  |
| `BR_NFIsContingency` |  | |  | `cast(j_1bnfdoc.conting as logbr_nfcontingency preserving type)` |  |  |
| `BR_NFAuthznProtocolNumber` |  | |  | `authcod` |  |  |
| `BR_NFAuthznProtocolNumber16` |  | |  | `authcod16` |  |  |
| `BR_NFAuthenticationDate` |  | |  | `cast(j_1bnfdoc.authdate as logbr_authdate preserving type)` |  |  |
| `BR_NFAuthenticationTime` |  | |  | `cast(j_1bnfdoc.authtime as logbr_authtime preserving type)` |  |  |
| `BR_NFeXMLVersion` |  | |  | `xmlvers` |  |  |
| `SupplierInvoice` |  | |  | `nfat` |  |  |
| `BR_NFOriginalAmount` |  | |  | `cast(j_1bnfdoc.vorig as logbr_invoiceoriginalamount)` |  |  |
| `BR_NFDiscountAmount` |  | |  | `cast(j_1bnfdoc.vdesc as logbr_invoicediscountamount)` |  |  |
| `BR_NFNetAmount` |  | |  | `cast(j_1bnfdoc.vliq as logbr_invoicenetamount)` |  |  |
| `BR_NFCommitmentNote` |  | |  | `xnemp` |  |  |
| `SugarcaneHarvest` |  | |  | `cast(j_1bnfdoc.safra as logbr_harvest_id preserving type)` |  |  |
| `SugarcaneRefMonthYear` |  | |  | `cast(j_1bnfdoc.ref_month_year as logbr_ref_month_year preserving type)` |  |  |
| `SugarcaneCurMnthQtyUnit` |  | |  | `cast('kg' as msehi)` |  |  |
| `SugarcaneCurrentMonthQty` |  | |  | `cast(j_1bnfdoc.qtotmes as logbr_currentmonthamount)` |  |  |
| `SugarcaneLastMnthQtyUnit` |  | |  | `cast('kg' as msehi)` |  |  |
| `SugarcaneLastMnthQuantity` |  | |  | `cast(j_1bnfdoc.qtotant as logbr_lastmonthamount)` |  |  |
| `SugarcaneSumBothMnthsQtyUnit` |  | |  | `cast('kg' as msehi)` |  |  |
| `SugarcaneSumBothMonthsQty` |  | |  | `cast(j_1bnfdoc.qtotger as logbr_sumofbothmonths)` |  |  |
| `SugarcaneSuppliesAmount` |  | |  | `cast(j_1bnfdoc.vfor as logbr_suppliesamount)` |  |  |
| `SugarcaneTotalDeductionAmount` |  | |  | `cast(j_1bnfdoc.vtotded as logbr_totaldeduction)` |  |  |
| `SugarcaneSuppliesNetAmt` |  | |  | `cast(j_1bnfdoc.vliqfor as logbr_suppliesnetamount)` |  |  |
| `BR_NFeDocumentStatus` |  | |  | `cast(j_1bnfdoc.docstat as logbr_nfedocstatus preserving type)` |  |  |
| `BR_NFIsFinalConsumer` |  | |  | `ind_final` |  |  |
| `BR_NFeCustomerPresence` |  | |  | `cast(j_1bnfdoc.ind_pres as logbr_nfe_indpres preserving type)` |  |  |
| `BR_NFeDestination` |  | |  | `cast(j_1bnfdoc.id_dest as logbr_nfe_iddest preserving type)` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `BR_NFPostingDate` |  | |  | `cast(j_1bnfdoc.pstdat as logbr_pstdat preserving type)` |  |  |
| `BusinessPlace` |  | |  | `cast(j_1bnfdoc.branch as logbr_branc_ preserving type)` |  |  |
| `BR_BusinessPlaceCNPJ` |  | |  | `cast(case when j_1bnfdoc.cnpj_bupla > '99999999999999' then '00000000000000' else j_1bnfdoc.cnpj_bupla end as logbr_cnpj_numc )` |  |  |
| `BR_BusinessPlaceCNPJ_2` |  | |  | `cast(j_1bnfdoc.cnpj_bupla as logbr_cnpj_bupla preserving type)` |  |  |
| `BusinessPlaceStateTaxNumber` |  | |  | `cast(j_1bnfdoc.ie_bupla as logbr_stains_bupla preserving type)` |  |  |
| `BR_BusPlaceStateTaxNumberST` |  | |  | `cast(j_1bnfdoc.iest_bupla as logbr_staist_bupla preserving type)` |  |  |
| `BusPlaceMunicipalTaxNumber` |  | |  | `cast(j_1bnfdoc.im_bupla as logbr_munins_bupla preserving type)` |  |  |
| `BR_BusinessPlaceCNAE` |  | |  | `cast(j_1bnfdoc.cnae_bupla as logbr_cnae_bupla preserving type)` |  |  |
| `BusinessPlaceTaxRegimenCode` |  | |  | `cast(j_1bnfdoc.crt_bupla as logbr_crt_bupla preserving type)` |  |  |
| `BR_NFTotalAmount` |  | |  | `nftot` |  |  |
| `SalesDocumentCurrency` |  | |  | `waerk` |  |  |
| `AccountingDocument` |  | |  | `cast(j_1bnfdoc.belnr as logbr_belnr_d preserving type)` |  |  |
| `BR_NFFiscalYear` |  | |  | `gjahr` |  |  |
| `BR_NFWithholdingAmount` |  | |  | `cast(j_1bnfdoc.witha as logbr_withholding_amount preserving type)` |  |  |
| `BR_PaymentForm` |  | |  | `cast(j_1bnfdoc.indpag as j_1bnfe_indpag preserving type)` |  |  |
| `FreightPayer` |  | |  | `cast(j_1bnfdoc.modfrete as logbr_freight_mode preserving type)` |  |  |
| `BR_ANTTCarrierRegistration` |  | |  | `cast(j_1bnfdoc.rntc as logbr_nat_cargo_carrier preserving type)` |  |  |
| `BR_NFeNumber` |  | |  | `cast(ltrim(j_1bnfdoc.nfenum, '0') as logbr_nfnum9 preserving type)` |  |  |
| `WagonID` |  | |  | `cast(j_1bnfdoc.vagao as logbr_wagon_id preserving type)` |  |  |
| `FerryBoatID` |  | |  | `cast(j_1bnfdoc.balsa as logbr_ferryboad_id preserving type)` |  |  |
| `BR_NFExportShipmentPlace` |  | |  | `xlocembarq` |  |  |
| `BR_NFExportShipmentRegion` |  | |  | `cast(j_1bnfdoc.ufembarq as logbr_shipment_place_uf preserving type)` |  |  |
| `BR_NFExportDispatchLocation` |  | |  | `cast(j_1bnfdoc.xlocdespacho as logbr_nfe_dispatch preserving type)` |  |  |
| `BR_NFIssueDate` |  | |  | `cast(j_1bnfdoc.docdat as logbr_docdat preserving type)` |  |  |
| `BR_NFIsMunicipal` |  | |  | `cast(municipal as logbr_municipal preserving type)` |  |  |
| `BR_NFOperationTypeDesc` |  | |  | `cast(j_1bnfdoc.natop as logbr_op_nature_desc preserving type)` |  |  |
| `BR_IsNFe` |  | |  | `cast(j_1bnfdoc.nfe as logbr_nfe preserving type)` |  |  |
| `BR_NFCancellationDate` |  | |  | `cast(j_1bnfdoc.candat as logbr_candat preserving type)` |  |  |
| `BR_NFHasFollowOnDocument` |  | |  | `cast(j_1bnfdoc.subseq as logbr_subseq preserving type)` |  |  |
| `BR_NFReferenceDocument` |  | |  | `ltrim(j_1bnfdoc.docref, '0')` |  |  |
| `LicensePlate` |  | |  | `placa` |  |  |
| `VehicleRegion` |  | |  | `uf1` |  |  |
| `BR_UtilsNFNumber` |  | |  | `cast(ltrim(j_1bnfdoc.nfnum_utilities, '0') as logbr_nfnum)` |  |  |
| `BR_NFPartnerPlaceType` |  | |  | `cast(j_1bnfdoc.partner_role as logbr_part_role preserving type)` |  |  |
| `ChangeAmount` |  | |  | `cast(j_1bnfdoc.v_troco as logbr_vtroco)` |  |  |
| `BR_NFFiscalCouponDocModel` |  | |  | `mod` |  |  |
| `BR_NFOperationOrderNumber` |  | |  | `ncoo` |  |  |
| `BR_NFPartnerForeignIdn` |  | |  | `cast(j_1bnfdoc.foreignid as logbr_foreignid preserving type)` |  |  |
| `BR_NFIsCalculatedByTaxService` |  | |  | `cast(j_1bnfdoc.tax_services_calc as logbr_tax_service_calculated preserving type )` |  |  |
| `BR_NFeIntermediatorTransaction` |  | |  | `cast(j_1bnfdoc.indintermed as logbr_nfe_indintermed preserving type )` |  |  |
| `BR_NFeIntermediatorRegistry` |  | |  | `cast(j_1bnfdoc.idcadinttran as logbr_nfe_idcadinttran preserving type )` |  |  |
| `BR_NFeIntermediatorCNPJ` |  | |  | `cast(case when j_1bnfdoc.cnpjintermed > '99999999999999' then '00000000000000' else j_1bnfdoc.cnpjintermed end as logbr_cnpj_numc )` |  |  |
| `BR_NFeIntermediatorCNPJ_2` |  | |  | `cast(j_1bnfdoc.cnpjintermed as logbr_nfe_cnpjintermed preserving type )` |  |  |
| `BR_CTeDocumentType` |  | |  | `cast(j_1bnfdoc.cte_type as logbr_type_cte preserving type)` |  |  |
| `BR_CTeMainProductTransported` |  | |  | `cast(j_1bnfdoc.main_product as logbr_main_prod_cte preserving type)` |  |  |
| `BR_CTeTotalGoodsAmount` |  | |  | `cast(j_1bnfdoc.total_ref_amt as logbr_goods_total_amnt_cte preserving type)` |  |  |
| `BR_CTePartnerServiceTaker` |  | |  | `cte_serv_taker` |  |  |
| `BR_CTeFiscalDocumentPartner` |  | |  | `cte_partner` |  |  |
| `BR_CTeServiceType` |  | |  | `serv_tp` |  |  |
| `BR_CTeTransportationMode` |  | |  | `cast(j_1bnfdoc.transp_mode as logbr_transportation_mode preserving type)` |  |  |
| `BR_CTeEstimatedDeliveryDate` |  | |  | `pln_dt_dlv` |  |  |
| `BR_CTeIsTruckFullyLoaded` |  | |  | `ftl_ind` |  |  |
| `BR_CTeJurisdictionCodeOrigin` |  | |  | `cte_strt_lct` |  |  |
| `BR_CTeJurisdictionCodeDest` |  | |  | `cte_end_lct` |  |  |
| `BR_NFSVerificationCode` |  | |  | `cast(j_1bnfdoc.checod as logbr_nfs_verification_code preserving type)` |  |  |
| `BR_NFSNumber` |  | |  | `prefno` |  |  |
| `BR_NFHasServiceItem` |  | |  | `nfesrv` |  |  |
| `BR_TransportPermitGuideType` |  | |  | `cast(j_1bnfdoc.tpguia as logbr_tpguia preserving type)` |  |  |
| `BR_TransportPermitIssuingState` |  | |  | `cast(j_1bnfdoc.ufguia as logbr_ufguia preserving type)` |  |  |
| `BR_TransportPermitGuideSeries` |  | |  | `cast(j_1bnfdoc.serieguia as logbr_serieguia preserving type)` |  |  |
| `BR_TransportPermitGuideNumber` |  | |  | `cast(j_1bnfdoc.nguia as logbr_nguia preserving type)` |  |  |
| `BR_DebitNFType` |  | |  | `cast(j_1bnfdoc.tpnfdebito as logbr_tpnfdebito preserving type)` |  |  |
| `BR_CreditNFType` |  | |  | `cast(j_1bnfdoc.tpnfcredito as logbr_tpnfcredito preserving type)` |  |  |
| `BR_GovernmentEntityType` |  | |  | `tpentegov` |  |  |
| `BR_GovPurRateReducnPercent` |  | |  | `predutor` |  |  |
| `BR_GvmntEntityOperationType` |  | |  | `tpopergov` |  |  |
| `IsBusinessPurposeCompleted` |  | |  | `case when _Vendor.IsBusinessPurposeCompleted = 'X' or _Customer.IsBusinessPurposeCompleted = 'X' or _BR_NFPartnerBusProposeCpl.IsBusinessPurposeCompleted = 'X' then 'X' else '' end` |  |  |
| `BR_NFPartnerAuthorizationGroup` |  | |  | `case when j_1bnfdoc.partyp = 'V' then _Vendor.AuthorizationGroup else _Customer.AuthorizationGroup end` |  |  |
| `BR_GoodsDeliveryEstimatedDate` |  | |  | `cast(j_1bnfdoc.dpreventrega as j_1b_dpreventregadisp preserving type)` |  |  |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` |  |  |
| `CountryShortName` |  | | `_CountryText` | `CountryShortName` |  |  |
| `IncotermsClassificationName` |  | | `_IncotermsClassificationText` | `IncotermsClassificationName` |  |  |
| `CurrencyName` |  | | `_CurrencyText` | `CurrencyName` |  |  |
| `BR_CFOPDesc` |  | | `_CFOPText` | `BR_CFOPDesc` |  |  |
| `_SugarcaneCurMnthQtyUnit` | | ✓ | | | | |
| `_SugarcaneLastMnthQtyUnit` | | ✓ | | | | |
| `_SugarcaneSumBothMnthsQtyUnit` | | ✓ | | | | |
| `_BR_NFShippingUnit` | | ✓ | | | | |
| `_HeaderWeightUnit` | | ✓ | | | | |
| `_SalesDocumentCurrency` | | ✓ | | | | |
| `_BR_NFDirection` | | ✓ | | | | |
| `_BR_NFModel` | | ✓ | | | | |
| `_BR_FreightPayer` | | ✓ | | | | |
| `_BR_NFeDocumentStatus` | | ✓ | | | | |
| `_BR_NFeDestination` | | ✓ | | | | |
| `_BR_NFeIntermediatorTrans` | | ✓ | | | | |
| `_BR_NFPartnerType` | | ✓ | | | | |
| `_BR_PartnerPlaceType` | | ✓ | | | | |
| `_BR_NFeCustomerPresence` | | ✓ | | | | |
| `_BR_PaymentForm` | | ✓ | | | | |
| `_BR_CTeFiscalDocPartner` | | ✓ | | | | |
| `_BR_CTeTransportationMode` | | ✓ | | | | |
| `_BR_CTeServiceType` | | ✓ | | | | |
| `_BR_CTeDocumentType` | | ✓ | | | | |
| `_BR_CTePartnerServiceTaker` | | ✓ | | | | |
| `_BR_NFIsCreatedManually` | | ✓ | | | | |
| `_MeansOfTransportType` | | ✓ | | | | |
| `_BR_NFIssuer` | | ✓ | | | | |
| `_BR_NFPartner` | | ✓ | | | | |
| `_BR_NFDocumentType` | | ✓ | | | | |
| `_Vendor` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SugarcaneCurMnthQtyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_SugarcaneLastMnthQtyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_SugarcaneSumBothMnthsQtyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_BR_NFShippingUnit` | `I_UnitOfMeasure` | [0..1] |
| `_HeaderWeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_SalesDocumentCurrency` | `I_Currency` | [0..1] |
| `_BR_NFDirection` | `I_BR_NFDirection` | [0..1] |
| `_BR_NFModel` | `I_BR_NFModel` | [0..1] |
| `_BR_FreightPayer` | `I_BR_FreightPayer` | [0..1] |
| `_BR_NFeDocumentStatus` | `I_BR_NFeDocumentStatus` | [0..1] |
| `_BR_NFeDestination` | `I_BR_NFeDestination` | [0..1] |
| `_BR_NFeIntermediatorTrans` | `I_BR_NFeIntermediatorTrans` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_BR_NFPartnerType` | `I_BR_NFPartnerType` | [0..1] |
| `_BR_PartnerPlaceType` | `I_BR_PartnerPlaceType` | [0..1] |
| `_BR_NFeCustomerPresence` | `I_BR_NFeCustomerPresence` | [0..1] |
| `_BR_PaymentForm` | `I_BR_CollectionPaymentForm` | [0..1] |
| `_BR_CTeFiscalDocPartner` | `I_BR_CTeFiscalDocPartner` | [0..1] |
| `_BR_CTeTransportationMode` | `I_BR_CTeTransportationMode` | [0..1] |
| `_BR_CTeServiceType` | `I_BR_CTeServiceType` | [0..1] |
| `_BR_CTeDocumentType` | `I_BR_CTeDocumentType` | [0..1] |
| `_BR_CTePartnerServiceTaker` | `I_BR_CTePartnerServiceTaker` | [0..1] |
| `_BR_NFIsCreatedManually` | `I_BR_NFIsCreatedManually` | [0..1] |
| `_MeansOfTransportType` | `I_MeansOfTransportType` | [0..1] |
| `_BR_NFIssuer` | `I_BR_NFIssuer` | [0..1] |
| `_BR_NFPartner` | `I_BR_NFPartner` | [0..1] |
| `_BR_NFDocumentType` | `I_BR_NFDocumentType` | [0..1] |
| `_Vendor` | `I_Supplier` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_BR_NFPartnerBusProposeCpl` | `I_BR_NFPartner` | [0..1] |
| `_CountryText` | `I_CountryText` | [0..1] |
| `_CurrencyText` | `I_CurrencyText` | [0..1] |
| `_IncotermsClassificationText` | `I_IncotermsClassificationText` | [0..1] |
| `_CFOPText` | `I_BR_CFOPText` | [0..1] |
| `_Extension` | `E_BR_NotaFiscal` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFDOCUMENT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Brazil Nota Fiscal Document Data'
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.preserveKey:true

define view I_BR_NFDocument
  as select from j_1bnfdoc
  association [0..1] to I_UnitOfMeasure             as _SugarcaneCurMnthQtyUnit      on  $projection.SugarcaneCurMnthQtyUnit = _SugarcaneCurMnthQtyUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure             as _SugarcaneLastMnthQtyUnit     on  $projection.SugarcaneLastMnthQtyUnit = _SugarcaneLastMnthQtyUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure             as _SugarcaneSumBothMnthsQtyUnit on  $projection.SugarcaneSumBothMnthsQtyUnit = _SugarcaneSumBothMnthsQtyUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure             as _BR_NFShippingUnit            on  $projection.BR_NFShippingUnit = _BR_NFShippingUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure             as _HeaderWeightUnit             on  $projection.HeaderWeightUnit = _HeaderWeightUnit.UnitOfMeasure

  association [0..1] to I_Currency                  as _SalesDocumentCurrency        on  $projection.SalesDocumentCurrency = _SalesDocumentCurrency.Currency

  association [0..1] to I_BR_NFDirection            as _BR_NFDirection               on  _BR_NFDirection.BR_NFDirection = $projection.BR_NFDirection
  association [0..1] to I_BR_NFModel                as _BR_NFModel                   on  _BR_NFModel.BR_NFModel = $projection.BR_NFModel
  association [0..1] to I_BR_FreightPayer           as _BR_FreightPayer              on  _BR_FreightPayer.FreightPayer = $projection.FreightPayer
  association [0..1] to I_BR_NFeDocumentStatus      as _BR_NFeDocumentStatus         on  _BR_NFeDocumentStatus.BR_NFeDocumentStatus = $projection.BR_NFeDocumentStatus
  association [0..1] to I_BR_NFeDestination         as _BR_NFeDestination            on  _BR_NFeDestination.BR_NFeDestination = $projection.BR_NFeDestination
  association [0..1] to I_BR_NFeIntermediatorTrans  as _BR_NFeIntermediatorTrans     on  _BR_NFeIntermediatorTrans.BR_NFeIntermediatorTransaction = $projection.BR_NFeIntermediatorTransaction
  association [0..1] to I_CompanyCode               as _CompanyCode                  on  _CompanyCode.CompanyCode = $projection.CompanyCode
  association [0..1] to I_BR_NFPartnerType          as _BR_NFPartnerType             on  _BR_NFPartnerType.BR_NFPartnerType = $projection.BR_NFPartnerType
  association [0..1] to I_BR_PartnerPlaceType       as _BR_PartnerPlaceType          on  _BR_PartnerPlaceType.BR_NFPartnerPlaceType = $projection.BR_NFPartnerPlaceType
  association [0..1] to I_BR_NFeCustomerPresence    as _BR_NFeCustomerPresence       on  _BR_NFeCustomerPresence.BR_NFeCustomerPresence = $projection.BR_NFeCustomerPresence
  association [0..1] to I_BR_CollectionPaymentForm  as _BR_PaymentForm               on  _BR_PaymentForm.PaymentForm = $projection.BR_PaymentForm

  association [0..1] to I_BR_CTeFiscalDocPartner    as _BR_CTeFiscalDocPartner       on  _BR_CTeFiscalDocPartner.BR_CTeFiscalDocumentPartner = $projection.BR_CTeFiscalDocumentPartner
  association [0..1] to I_BR_CTeTransportationMode  as _BR_CTeTransportationMode     on  _BR_CTeTransportationMode.BR_CTeTransportationMode = $projection.BR_CTeTransportationMode
  association [0..1] to I_BR_CTeServiceType         as _BR_CTeServiceType            on  _BR_CTeServiceType.BR_CTeServiceType = $projection.BR_CTeServiceType
  association [0..1] to I_BR_CTeDocumentType        as _BR_CTeDocumentType           on  _BR_CTeDocumentType.BR_CTeDocumentType = $projection.BR_CTeDocumentType
  association [0..1] to I_BR_CTePartnerServiceTaker as _BR_CTePartnerServiceTaker    on  _BR_CTePartnerServiceTaker.BR_CTePartnerServiceTaker = $projection.BR_CTePartnerServiceTaker

  association [0..1] to I_BR_NFIsCreatedManually    as _BR_NFIsCreatedManually       on  _BR_NFIsCreatedManually.BR_NFIsCreatedManually = $projection.BR_NFIsCreatedManually
  association [0..1] to I_MeansOfTransportType      as _MeansOfTransportType         on  _MeansOfTransportType.MeansOfTransportType = $projection.MeansOfTransportType
  association [0..1] to I_BR_NFIssuer               as _BR_NFIssuer                  on  _BR_NFIssuer.BR_NFIssuedBy = $projection.BR_NFIssuedBy

  association [0..1] to I_BR_NFPartner              as _BR_NFPartner                 on  _BR_NFPartner.BR_NotaFiscal        = $projection.BR_NotaFiscal
                                                                                     and _BR_NFPartner.BR_NFPartnerFunction = $projection.BR_NFPartnerFunction
  association [0..1] to I_BR_NFDocumentType         as _BR_NFDocumentType            on  _BR_NFDocumentType.BR_NFDocumentType = $projection.BR_NFDocumentType

  association [0..1] to I_Supplier                  as _Vendor                       on  _Vendor.Supplier = $projection.BR_NFPartner

  association [0..1] to I_Customer                  as _Customer                     on  _Customer.Customer = $projection.BR_NFPartner

  association [0..1] to I_BR_NFPartner              as _BR_NFPartnerBusProposeCpl    on  _BR_NFPartnerBusProposeCpl.BR_NotaFiscal              = $projection.BR_NotaFiscal
                                                                                     and _BR_NFPartnerBusProposeCpl.IsBusinessPurposeCompleted = 'X'
  association [0..1] to I_CountryText               as _CountryText                  on  _CountryText.Country = $projection.BR_NFPartnerCountryCode
                                                                                     and _CountryText.Language = $session.system_language
  association [0..1] to I_CurrencyText              as _CurrencyText                 on  _CurrencyText.Currency = $projection.SalesDocumentCurrency
                                                                                     and _CurrencyText.Language = $session.system_language
  association [0..1] to I_IncotermsClassificationText   as _IncotermsClassificationText on  _IncotermsClassificationText.IncotermsClassification = $projection.IncotermsClassification
                                                                                        and _IncotermsClassificationText.Language = $session.system_language
  association [0..1] to I_BR_CFOPText               as _CFOPText                     on  _CFOPText.Language    = $session.system_language
                                                                                     and _CFOPText.BR_CFOPCode = $projection.BR_WhldgICMSForTranspCFOP
//Extension Association
  association [0..1] to E_BR_NotaFiscal             as _Extension                    on $projection.BR_NotaFiscal  = _Extension.BR_NotaFiscal

{
  key cast(j_1bnfdoc.docnum as logbr_docnum preserving type)                             as BR_NotaFiscal,
      j_1bnfdoc.parvw                                                                    as BR_NFPartnerFunction,
      j_1bnfdoc.parid                                                                    as BR_NFPartner,
      j_1bnfdoc.name1                                                                    as BR_NFPartnerName1,
      j_1bnfdoc.name2                                                                    as BR_NFPartnerName2,
      j_1bnfdoc.name3                                                                    as BR_NFPartnerName3,
      j_1bnfdoc.name4                                                                    as BR_NFPartnerName4,
      j_1bnfdoc.parxcpdk                                                                 as PartnerIsOneTimeAccount,
      @ObjectModel.foreignKey.association: '_BR_NFPartnerType'
      cast(j_1bnfdoc.partyp as logbr_nfpartnertype preserving type)                      as BR_NFPartnerType,
      j_1bnfdoc.stras                                                                    as BR_NFPartnerStreetName,
      j_1bnfdoc.house_num1                                                               as BusinessPartnerHouseNumber,
      j_1bnfdoc.house_num2                                                               as BPHsNmbrSuplmntTxt,
      j_1bnfdoc.ort01                                                                    as BR_NFPartnerCityName,
      j_1bnfdoc.regio                                                                    as BR_NFPartnerRegionCode,
      j_1bnfdoc.ort02                                                                    as BR_NFPartnerDistrictName,
      j_1bnfdoc.land1                                                                    as BR_NFPartnerCountryCode,
      j_1bnfdoc.pstlz                                                                    as BR_NFPartnerPostalCode,
      cast(j_1bnfdoc.stkzn as logbr_nfnaturalperson preserving type)                     as BR_NFPartnerIsNaturalPerson,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BR_NFPartnerCNPJ_2'
      @API.element.decommissioningPlannedForYearMonth: '2026-07'
      cast(case 
        when j_1bnfdoc.cgc > '99999999999999' 
          then '00000000000000' 
        else j_1bnfdoc.cgc end as logbr_cnpj_numc )                                      as BR_NFPartnerCNPJ,
      cast(j_1bnfdoc.cgc as logbr_nfpartnercnpj preserving type)                         as BR_NFPartnerCNPJ_2,
      cast(j_1bnfdoc.cpf as logbr_nfpartnercpf preserving type)                          as BR_NFPartnerCPF,
      j_1bnfdoc.telf1                                                                    as PhoneNumber,
      j_1bnfdoc.stains                                                                   as BR_NFPartnerStateTaxNumber,
      j_1bnfdoc.munins                                                                   as BR_NFPartnerMunicipalTaxNumber,
      j_1bnfdoc.iest_partner                                                             as BR_NFPartnerStateTaxNumberST,
      j_1bnfdoc.cnae_partner                                                             as BR_NFPartnerCNAE,
      j_1bnfdoc.crt_partner                                                              as BR_NFPartnerTaxRegimenCode,
      j_1bnfdoc.indust                                                                   as BR_PartnerCFOPCategory,
      j_1bnfdoc.isuf                                                                     as BR_SUFRAMACode,
      j_1bnfdoc.itmf_pco_category                                                        as BR_SPEDTaxCategory,
      j_1bnfdoc.itmf_repdat                                                              as ReportingIncgOrOutgDate,
      j_1bnfdoc.txjcd                                                                    as BR_NFPartnerTaxJurisdiction,
      j_1bnfdoc.observat                                                                 as BR_NFObservationText,
      @ObjectModel.foreignKey.association: '_MeansOfTransportType'
      cast(j_1bnfdoc.traty as logbr_traty preserving type)                               as MeansOfTransportType,
      cast(j_1bnfdoc.traid as logbr_traid preserving type)                               as MeansOfTransport,
      j_1bnfdoc.inco1                                                                    as IncotermsClassification,
      j_1bnfdoc.inco2                                                                    as IncotermsTransferLocation,
      j_1bnfdoc.vstel                                                                    as ShippingPoint,
      cast(j_1bnfdoc.shpmrk as logbr_shpmrk preserving type)                             as BR_NFShippingUnitBrand,
      cast(j_1bnfdoc.shpnum as logbr_shpnum preserving type)                             as BR_NFShippingUnitNumber,
      cast(j_1bnfdoc.anzpk as logbr_anzpk preserving type)                               as BR_NFNumberOfPackages,
      @Semantics.unitOfMeasure: true
      cast(j_1bnfdoc.shpunt as logbr_shpunt preserving type)                             as BR_NFShippingUnit,
      j_1bnfdoc.dsaient                                                                  as BR_NFArrivalOrDepartureDate,
      @Semantics.unitOfMeasure: true
      j_1bnfdoc.gewei                                                                    as HeaderWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'HeaderWeightUnit'
      cast(j_1bnfdoc.ntgew as logbr_ntgew_15 preserving type)                            as HeaderNetWeight,
      @Semantics.quantity.unitOfMeasure: 'HeaderWeightUnit'
      cast(j_1bnfdoc.brgew as logbr_brgew_15 preserving type)                            as HeaderGrossWeight,
      cast(j_1bnfdoc.hsaient as logbr_dep_arr_time preserving type)                      as BR_NFArrivalOrDepartureTime,
      cast(j_1bnfdoc.rettransp_cfop as logbr_transport_whldg_cfop preserving type)       as BR_WhldgICMSForTranspCFOP,
      j_1bnfdoc.rettransp_cmunfg                                                         as BR_WhldgICMSForTranspCity,
      cast(j_1bnfdoc.crenam as logbr_crenam preserving type)                             as CreatedByUser,
      cast(j_1bnfdoc.credat as logbr_credat preserving type)                             as CreationDate,
      cast(j_1bnfdoc.cretim as logbr_cretim preserving type)                             as CreationTime,
      cast(j_1bnfdoc.awsys as logbr_logsystem preserving type)                           as LogicalSystem,
      cast(j_1bnfdoc.chanam as logbr_chanam preserving type)                             as LastChangedByUser,
      cast(j_1bnfdoc.chadat as logbr_chadat preserving type)                             as LastChangeDate,
      cast(j_1bnfdoc.chatim as logbr_chatim preserving type)                             as LastChangeTime,
      cast(j_1bnfdoc.zterm as logbr_dzterm preserving type)                              as PaymentTerms,
      cast(j_1bnfdoc.printd as logbr_nfprinted preserving type)                          as BR_NFIsPrinted,
      @Semantics.booleanIndicator: true
      @ObjectModel.foreignKey.association: '_BR_NFIsCreatedManually'
      cast(j_1bnfdoc.manual as logbr_manual preserving type)                             as BR_NFIsCreatedManually,
      @Semantics.booleanIndicator: true
      j_1bnfdoc.entrad                                                                   as BR_NFIsIncomingIssdByCust,
      cast(j_1bnfdoc.cancel as logbr_nfcancelled preserving type)                        as BR_NFIsCanceled,
      cast(j_1bnfdoc.fatura as logbr_nffatura preserving type)                           as BR_NFIsChargingInvoice,
      @ObjectModel.foreignKey.association: '_BR_NFDirection'
      cast(j_1bnfdoc.direct as logbr_nfdirection preserving type)                        as BR_NFDirection,
      cast(j_1bnfdoc.nftype as logbr_nftype preserving type)                             as BR_NFType,
      @ObjectModel.foreignKey.association: '_BR_NFDocumentType'
      cast(j_1bnfdoc.doctyp as logbr_nfdocumenttype preserving type)                     as BR_NFDocumentType,
      @ObjectModel.foreignKey.association: '_BR_NFModel'
      cast(j_1bnfdoc.model as logbr_model preserving type)                               as BR_NFModel,
      cast(ltrim(j_1bnfdoc.nfnum, '0') as logbr_nfnumb)                                  as BR_NFNumber,
      cast(j_1bnfdoc.series as logbr_nf_series preserving type)                          as BR_NFSeries,
      j_1bnfdoc.subser                                                                   as BR_NFSubSeries,
      j_1bnfdoc.cod_sit                                                                  as BR_NFSituationCode,
      @ObjectModel.foreignKey.association: '_BR_NFIssuer'
      cast(j_1bnfdoc.ind_emit as logbr_nfissuer preserving type)                         as BR_NFIssuedBy,
      cast(j_1bnfdoc.conting as logbr_nfcontingency preserving type)                     as BR_NFIsContingency,
      j_1bnfdoc.authcod                                                                  as BR_NFAuthznProtocolNumber,
      j_1bnfdoc.authcod16                                                                as BR_NFAuthznProtocolNumber16,
      cast(j_1bnfdoc.authdate as logbr_authdate preserving type)                         as BR_NFAuthenticationDate,
      cast(j_1bnfdoc.authtime as logbr_authtime preserving type)                         as BR_NFAuthenticationTime,
      j_1bnfdoc.xmlvers                                                                  as BR_NFeXMLVersion,
      j_1bnfdoc.nfat                                                                     as SupplierInvoice,
      @Aggregation.default:#SUM
      cast(j_1bnfdoc.vorig as logbr_invoiceoriginalamount)                               as BR_NFOriginalAmount,
      @Aggregation.default:#SUM
      cast(j_1bnfdoc.vdesc as logbr_invoicediscountamount)                               as BR_NFDiscountAmount,
      @Aggregation.default:#SUM
      cast(j_1bnfdoc.vliq as logbr_invoicenetamount)                                     as BR_NFNetAmount,
      j_1bnfdoc.xnemp                                                                    as BR_NFCommitmentNote,
      cast(j_1bnfdoc.safra as logbr_harvest_id preserving type)                          as SugarcaneHarvest,
      cast(j_1bnfdoc.ref_month_year as logbr_ref_month_year preserving type)             as SugarcaneRefMonthYear,
      @Semantics.unitOfMeasure: true
      cast('kg' as msehi)                                                                as SugarcaneCurMnthQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'SugarcaneCurMnthQtyUnit'
      @DefaultAggregation: #SUM
      cast(j_1bnfdoc.qtotmes as logbr_currentmonthamount)                                as SugarcaneCurrentMonthQty,
      @Semantics.unitOfMeasure: true
      cast('kg' as msehi)                                                                as SugarcaneLastMnthQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'SugarcaneLastMnthQtyUnit'
      @DefaultAggregation: #SUM
      cast(j_1bnfdoc.qtotant as logbr_lastmonthamount)                                   as SugarcaneLastMnthQuantity,
      @Semantics.unitOfMeasure: true
      cast('kg' as msehi)                                                                as SugarcaneSumBothMnthsQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'SugarcaneSumBothMnthsQtyUnit'
      @DefaultAggregation: #SUM
      cast(j_1bnfdoc.qtotger as logbr_sumofbothmonths)                                   as SugarcaneSumBothMonthsQty,
      @Aggregation.default:#SUM
      cast(j_1bnfdoc.vfor as logbr_suppliesamount)                                       as SugarcaneSuppliesAmount,
      @Aggregation.default:#SUM
      cast(j_1bnfdoc.vtotded as logbr_totaldeduction)                                    as SugarcaneTotalDeductionAmount,
      @Aggregation.default:#SUM
      cast(j_1bnfdoc.vliqfor as logbr_suppliesnetamount)                                 as SugarcaneSuppliesNetAmt,
      @ObjectModel.foreignKey.association: '_BR_NFeDocumentStatus'
      cast(j_1bnfdoc.docstat as logbr_nfedocstatus preserving type)                      as BR_NFeDocumentStatus,
      @Semantics.booleanIndicator: true
      j_1bnfdoc.ind_final                                                                as BR_NFIsFinalConsumer,
      @ObjectModel.foreignKey.association: '_BR_NFeCustomerPresence'
      cast(j_1bnfdoc.ind_pres as logbr_nfe_indpres preserving type)                      as BR_NFeCustomerPresence,
      @ObjectModel.foreignKey.association: '_BR_NFeDestination'
      cast(j_1bnfdoc.id_dest as logbr_nfe_iddest preserving type)                        as BR_NFeDestination,
      @ObjectModel.text.element: 'CompanyCodeName'
      j_1bnfdoc.bukrs                                                                    as CompanyCode,
      cast(j_1bnfdoc.pstdat as logbr_pstdat preserving type)                             as BR_NFPostingDate,
      cast(j_1bnfdoc.branch as logbr_branc_ preserving type)                             as BusinessPlace,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BR_BusinessPlaceCNPJ_2'
      @API.element.decommissioningPlannedForYearMonth: '2026-07'
      cast(case 
        when j_1bnfdoc.cnpj_bupla > '99999999999999' 
          then '00000000000000' 
        else j_1bnfdoc.cnpj_bupla end as logbr_cnpj_numc )                               as BR_BusinessPlaceCNPJ,
      cast(j_1bnfdoc.cnpj_bupla as logbr_cnpj_bupla preserving type)                     as BR_BusinessPlaceCNPJ_2,
      cast(j_1bnfdoc.ie_bupla as logbr_stains_bupla preserving type)                     as BusinessPlaceStateTaxNumber,
      cast(j_1bnfdoc.iest_bupla as logbr_staist_bupla preserving type)                   as BR_BusPlaceStateTaxNumberST,
      cast(j_1bnfdoc.im_bupla as logbr_munins_bupla preserving type)                     as BusPlaceMunicipalTaxNumber,
      cast(j_1bnfdoc.cnae_bupla as logbr_cnae_bupla preserving type)                     as BR_BusinessPlaceCNAE,
      cast(j_1bnfdoc.crt_bupla as logbr_crt_bupla preserving type)                       as BusinessPlaceTaxRegimenCode,
      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      j_1bnfdoc.nftot                                                                    as BR_NFTotalAmount,
      @Semantics.currencyCode:true
      j_1bnfdoc.waerk                                                                    as SalesDocumentCurrency,
      cast(j_1bnfdoc.belnr as logbr_belnr_d preserving type)                             as AccountingDocument,
      j_1bnfdoc.gjahr                                                                    as BR_NFFiscalYear,
      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      cast(j_1bnfdoc.witha as logbr_withholding_amount preserving type)                  as BR_NFWithholdingAmount,
      @ObjectModel.foreignKey.association: '_BR_PaymentForm'
      cast(j_1bnfdoc.indpag as j_1bnfe_indpag preserving type)                           as BR_PaymentForm,
      @ObjectModel.foreignKey.association: '_BR_FreightPayer'
      cast(j_1bnfdoc.modfrete as logbr_freight_mode preserving type)                     as FreightPayer,
      cast(j_1bnfdoc.rntc as logbr_nat_cargo_carrier preserving type)                    as BR_ANTTCarrierRegistration,
      cast(ltrim(j_1bnfdoc.nfenum, '0') as logbr_nfnum9 preserving type)                 as BR_NFeNumber,
      cast(j_1bnfdoc.vagao as logbr_wagon_id preserving type)                            as WagonID,
      cast(j_1bnfdoc.balsa as logbr_ferryboad_id preserving type)                        as FerryBoatID,
      j_1bnfdoc.xlocembarq                                                               as BR_NFExportShipmentPlace,
      cast(j_1bnfdoc.ufembarq as logbr_shipment_place_uf preserving type)                as BR_NFExportShipmentRegion,
      cast(j_1bnfdoc.xlocdespacho as logbr_nfe_dispatch preserving type)                 as BR_NFExportDispatchLocation,
      cast(j_1bnfdoc.docdat as logbr_docdat preserving type)                             as BR_NFIssueDate,
      cast(municipal as logbr_municipal preserving type)                                 as BR_NFIsMunicipal,
      cast(j_1bnfdoc.natop as logbr_op_nature_desc preserving type)                      as BR_NFOperationTypeDesc,
      cast(j_1bnfdoc.nfe as logbr_nfe preserving type)                                   as BR_IsNFe,
      cast(j_1bnfdoc.candat as logbr_candat preserving type)                             as BR_NFCancellationDate,
      cast(j_1bnfdoc.subseq as logbr_subseq preserving type)                             as BR_NFHasFollowOnDocument,
      ltrim(j_1bnfdoc.docref, '0')                                                       as BR_NFReferenceDocument,
      j_1bnfdoc.placa                                                                    as LicensePlate,
      j_1bnfdoc.uf1                                                                      as VehicleRegion,
      cast(ltrim(j_1bnfdoc.nfnum_utilities, '0') as logbr_nfnum)                         as BR_UtilsNFNumber,
      @ObjectModel.foreignKey.association: '_BR_PartnerPlaceType'
      cast(j_1bnfdoc.partner_role as logbr_part_role preserving type)                    as BR_NFPartnerPlaceType,
      @DefaultAggregation: #NONE
      @Aggregation.default:#SUM
      cast(j_1bnfdoc.v_troco as logbr_vtroco)                                            as ChangeAmount,
      j_1bnfdoc.mod                                                                      as BR_NFFiscalCouponDocModel, //2723214
      j_1bnfdoc.ncoo                                                                     as BR_NFOperationOrderNumber, //2723214
      cast(j_1bnfdoc.foreignid as logbr_foreignid preserving type)                       as BR_NFPartnerForeignIdn,
      cast(j_1bnfdoc.tax_services_calc as logbr_tax_service_calculated preserving type ) as BR_NFIsCalculatedByTaxService,
      cast(j_1bnfdoc.indintermed as logbr_nfe_indintermed preserving type )              as BR_NFeIntermediatorTransaction,
      cast(j_1bnfdoc.idcadinttran as logbr_nfe_idcadinttran preserving type )            as BR_NFeIntermediatorRegistry,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BR_NFeIntermediatorCNPJ_2'
      @API.element.decommissioningPlannedForYearMonth: '2026-07'
      cast(case 
        when j_1bnfdoc.cnpjintermed > '99999999999999' 
          then '00000000000000' 
        else j_1bnfdoc.cnpjintermed end as logbr_cnpj_numc )                             as BR_NFeIntermediatorCNPJ,
      cast(j_1bnfdoc.cnpjintermed as logbr_nfe_cnpjintermed preserving type )            as BR_NFeIntermediatorCNPJ_2,

      ----- CTE -----
      @ObjectModel.foreignKey.association: '_BR_CTeDocumentType'
      cast(j_1bnfdoc.cte_type  as logbr_type_cte preserving type)                        as BR_CTeDocumentType,
      cast(j_1bnfdoc.main_product as logbr_main_prod_cte preserving type)                as BR_CTeMainProductTransported,
      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      cast(j_1bnfdoc.total_ref_amt as logbr_goods_total_amnt_cte preserving type)        as BR_CTeTotalGoodsAmount,
      @ObjectModel.foreignKey.association: '_BR_CTePartnerServiceTaker'
      j_1bnfdoc.cte_serv_taker                                                           as BR_CTePartnerServiceTaker,
      @ObjectModel.foreignKey.association: '_BR_CTeFiscalDocPartner'
      j_1bnfdoc.cte_partner                                                              as BR_CTeFiscalDocumentPartner,
      j_1bnfdoc.serv_tp                                                                  as BR_CTeServiceType,
      @ObjectModel.foreignKey.association: '_BR_CTeTransportationMode'
      cast(j_1bnfdoc.transp_mode as logbr_transportation_mode preserving type)           as BR_CTeTransportationMode,
      j_1bnfdoc.pln_dt_dlv                                                               as BR_CTeEstimatedDeliveryDate,
      j_1bnfdoc.ftl_ind                                                                  as BR_CTeIsTruckFullyLoaded,
      j_1bnfdoc.cte_strt_lct                                                             as BR_CTeJurisdictionCodeOrigin,
      j_1bnfdoc.cte_end_lct                                                              as BR_CTeJurisdictionCodeDest,

      ----- NFS -----
      cast(j_1bnfdoc.checod as logbr_nfs_verification_code preserving type)              as BR_NFSVerificationCode,
      j_1bnfdoc.prefno                                                                   as BR_NFSNumber,
      j_1bnfdoc.nfesrv                                                                   as BR_NFHasServiceItem,

      ----- AGRICULTURE DEFENSIVE -----
      cast(j_1bnfdoc.tpguia as logbr_tpguia preserving type)                             as BR_TransportPermitGuideType,
      cast(j_1bnfdoc.ufguia as logbr_ufguia preserving type)                             as BR_TransportPermitIssuingState,
      cast(j_1bnfdoc.serieguia as logbr_serieguia preserving type)                       as BR_TransportPermitGuideSeries,
      cast(j_1bnfdoc.nguia as logbr_nguia preserving type)                               as BR_TransportPermitGuideNumber,

      ----- TAX REFORM -----
      cast(j_1bnfdoc.tpnfdebito as logbr_tpnfdebito preserving type)                     as BR_DebitNFType,
      cast(j_1bnfdoc.tpnfcredito as logbr_tpnfcredito preserving type)                   as BR_CreditNFType,
      j_1bnfdoc.tpentegov                                                                as BR_GovernmentEntityType,
      j_1bnfdoc.predutor                                                                 as BR_GovPurRateReducnPercent,
      j_1bnfdoc.tpopergov                                                                as BR_GvmntEntityOperationType,

      -- Access Control (DPP) CTe, NFS and NF --
      @Semantics.booleanIndicator: true
      @Consumption.filter.hidden: true
      case
        when _Vendor.IsBusinessPurposeCompleted  = 'X' or
            _Customer.IsBusinessPurposeCompleted = 'X' or
            _BR_NFPartnerBusProposeCpl.IsBusinessPurposeCompleted = 'X'
            then 'X'
        else '' end as IsBusinessPurposeCompleted,

      -- Access Control (DPP), field used only CTe and NFS --
      @Consumption.filter.hidden: true
      case
        when j_1bnfdoc.partyp = 'V' then  _Vendor.AuthorizationGroup
        else _Customer.AuthorizationGroup
      end                                                                                as BR_NFPartnerAuthorizationGroup,
      cast(j_1bnfdoc.dpreventrega as j_1b_dpreventregadisp preserving type)      as BR_GoodsDeliveryEstimatedDate,

      _SugarcaneCurMnthQtyUnit,
      _SugarcaneLastMnthQtyUnit,
      _SugarcaneSumBothMnthsQtyUnit,
      _BR_NFShippingUnit,
      _HeaderWeightUnit,
      _SalesDocumentCurrency,
      _BR_NFDirection,
      _BR_NFModel,
      _BR_FreightPayer,
      _BR_NFeDocumentStatus,
      _BR_NFeDestination,
      _BR_NFeIntermediatorTrans,
      @Semantics.text: true
      _CompanyCode.CompanyCodeName,
      _BR_NFPartnerType,
      _BR_PartnerPlaceType,
      _BR_NFeCustomerPresence,
      _BR_CTePartnerServiceTaker,
      _BR_CTeTransportationMode,
      _BR_CTeServiceType,
      _BR_CTeDocumentType,
      _BR_CTeFiscalDocPartner,
      _BR_NFIsCreatedManually,
      _MeansOfTransportType,
      _BR_NFIssuer,
      _BR_PaymentForm,
      _BR_NFPartner,
      _Vendor,
      _Customer,
      _BR_NFDocumentType,
      _CountryText.CountryShortName,
      _IncotermsClassificationText.IncotermsClassificationName,
      _CurrencyText.CurrencyName,
      _CFOPText.BR_CFOPDesc
}
```
