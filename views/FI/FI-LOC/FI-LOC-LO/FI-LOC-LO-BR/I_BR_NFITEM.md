---
name: I_BR_NFITEM
description: BR Nfitem
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - item-level
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFITEM

**BR Nfitem**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NotaFiscal` | ✓ | |  | `docnum` |  |  |
| `BR_NotaFiscalItem` | ✓ | |  | `itmnum` |  |  |
| `BR_ICMSTaxSituation` |  | |  | `cast(case NFItem.taxsit when 'A' then '41' when 'B' then '51' else concat(NFItem.taxsit, '0') end as logbr_taxsit preserving type)` |  |  |
| `BR_IPITaxSituation` |  | |  | `cast(NFItem.taxsi2 as logbr_taxsi2 preserving type)` |  |  |
| `BR_ISSTaxSituation` |  | |  | `cast(NFItem.taxsi3 as logbr_isstaxsituation)` |  |  |
| `BR_COFINSTaxSituation` |  | |  | `cast(NFItem.taxsi4 as logbr_taxsi4 preserving type)` |  |  |
| `BR_PISTaxSituation` |  | |  | `cast(NFItem.taxsi5 as logbr_taxsi5 preserving type)` |  |  |
| `BR_ICMSBaseDetn` |  | |  | `cast(NFItem.modbc as logbr_icms_base_det preserving type)` |  |  |
| `BR_ICMSSTBaseDetermination` |  | |  | `cast(NFItem.modbcst as logbr_icst_base_det preserving type)` |  |  |
| `BR_ICMSSTLegalClassfctn` |  | |  | `cast(NFItem.cest as logbr_cest preserving type)` |  |  |
| `BR_SubstituteICMSAmount` |  | |  | `cast(NFItem.vicmssubstituto as logbr_vicmssubstituto preserving type)` |  |  |
| `BR_ICMSExemptionReason` |  | |  | `cast(NFItem.motdesicms as logbr_icmsexemptionreason preserving type)` |  |  |
| `BR_ICMSDefermentAmount` |  | |  | `cast(NFItem.vicmsdif as logbr_nfe_rfc_vicmsdif preserving type)` |  |  |
| `BR_ICMSDeferralTaxRate` |  | |  | `cast(NFItem.picmsdef as logbr_picmsdef preserving type)` |  |  |
| `BR_WithholdingICMSSTBaseAmount` |  | |  | `cast(NFItem.vbcstret as logbr_nfe_rfc_icmsstretbase preserving type)` |  |  |
| `BR_WithholdingICMSSTAmount` |  | |  | `cast(NFItem.vicmsstret as logbr_nfe_rfc_icmsstrettaxval preserving type)` |  |  |
| `BR_IPILegalClassification` |  | |  | `cast(NFItem.cenq as logbr_ipi_legal_class_code preserving type)` |  |  |
| `BR_TobaccoBeverageIPIClassfctn` |  | |  | `cast(NFItem.clenq as logbr_ipi_class_tbc_bev preserving type)` |  |  |
| `BR_IPIControlSealCode` |  | |  | `cast(NFItem.cselo as logbr_ipi_contr_seal_code preserving type)` |  |  |
| `BR_IPIControlSealQuantityValue` |  | |  | `cast(NFItem.qselo as logbr_ipi_contr_seal_quan preserving type)` |  |  |
| `CostCenter` |  | |  | `kostl` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `InternalOrder` |  | |  | `aufnr` |  |  |
| `ProjectNetwork` |  | |  | `nplnr` |  |  |
| `WBSElementInternalID` |  | |  | `ps_psp_pnr` |  |  |
| `CostObject` |  | |  | `kstrg` |  |  |
| `Segment` |  | |  | `segment` |  |  |
| `BR_NFNetFreightAmount` |  | |  | `netfre` |  |  |
| `BR_NFNetInsuranceAmount` |  | |  | `netins` |  |  |
| `BR_NFNetOtherExpensesAmount` |  | |  | `netoth` |  |  |
| `NetPriceAmount` |  | |  | `cast(NFItem.netpr as j_1bnfpri preserving type)` |  |  |
| `NetValueAmount` |  | |  | `cast(NFItem.netwr as logbr_netamount preserving type)` |  |  |
| `BR_NFItemType` |  | |  | `cast(NFItem.itmtyp as logbr_itmtyp preserving type)` |  |  |
| `BR_ICMSOrISSIsIncludedInPrice` |  | |  | `incltx` |  |  |
| `BR_NFItemIsStatistical` |  | |  | `cast(NFItem.statit as logbr_statit preserving type)` |  |  |
| `BR_NFIsServiceItem` |  | |  | `tmiss` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `MaterialName` |  | |  | `maktx` |  |  |
| `ValuationArea` |  | |  | `bwkey` |  |  |
| `ValuationType` |  | |  | `cast(NFItem.bwtar as logbr_bwtar_d preserving type)` |  |  |
| `MaterialGroup` |  | |  | `cast(NFItem.matkl as logbr_matkl preserving type)` |  |  |
| `BR_CFOPCategory` |  | |  | `indus3` |  |  |
| `QuantityInBaseUnit` |  | |  | `menge` |  |  |
| `BaseUnit` |  | |  | `meins` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `Batch` |  | |  | `charg` |  |  |
| `BR_NFSourceDocumentType` |  | |  | `reftyp` |  |  |
| `BR_NFSourceDocumentNumber` |  | |  | `cast(NFItem.refkey as logbr_refkey preserving type)` |  |  |
| `BR_NFSourceDocumentItem` |  | |  | `refitm` |  |  |
| `BR_ReferenceNFNumber` |  | |  | `cast(NFItem.docref as logbr_docref preserving type)` |  |  |
| `BR_ReferenceNFItem` |  | |  | `cast(NFItem.itmref as logbr_itmref preserving type)` |  |  |
| `BR_NFPercentReturned` |  | |  | `cast(NFItem.pipidevol as logbr_nfe_pret preserving type)` |  |  |
| `BR_NFNetDiscountAmount` |  | |  | `cast(NFItem.netdis as logbr_nfnetdiscountamount)` |  |  |
| `BR_ExemptedICMSAmount` |  | |  | `cast(NFItem.vicmsdeson as logbr_nfe_vicmsdeson preserving type)` |  |  |
| `BR_ICMSStatisticalExemptionAmt` |  | |  | `cast(NFItem.ststcl_vicmsdeson as logbr_ststcl_vicmsdeson preserving type)` |  |  |
| `BR_ICMSSTMarginAddedPercent` |  | |  | `cast(NFItem.p_mvast as logbr_pmvast preserving type)` |  |  |
| `BR_CPRBIsRelevant` |  | |  | `cprb` |  |  |
| `BR_NFTotalAmount` |  | |  | `netwrt` |  |  |
| `BR_CFOPCode` |  | |  | `cast(NFItem.cfop as logbr_cfopcode preserving type)` |  |  |
| `BR_MaterialOrigin` |  | |  | `cast(NFItem.matorg as logbr_matorg preserving type)` |  |  |
| `BR_MaterialUsage` |  | |  | `cast(NFItem.matuse as logbr_matuse preserving type)` |  |  |
| `IsProducedInhouse` |  | |  | `cast(NFItem.ownpro as logbr_ownpro preserving type)` |  |  |
| `NCMCode` |  | |  | `cast(NFItem.nbm as logbr_steuc preserving type)` |  |  |
| `BR_NBSCode` |  | |  | `cast(NFItem.nbs as logbr_nbs preserving type)` |  |  |
| `BR_EFDREINFServiceCode` |  | |  | `reinf_service_code` |  |  |
| `BR_LC116ServiceCode` |  | |  | `lc116_service_code` |  |  |
| `BR_ISSBenefitCode` |  | |  | `cbenef_iss` |  |  |
| `BR_CSTISSCode` |  | |  | `municipal_iss_taxsit` |  |  |
| `BR_NFApproximateTotalTaxAmount` |  | |  | `cast(NFItem.vtottrib as logbr_nf_vtottrib)` |  |  |
| `BR_FCINumber` |  | |  | `cast(NFItem.nfci as logbr_nfe_nfci preserving type)` |  |  |
| `BR_ICMSTaxLaw` |  | |  | `cast(NFItem.taxlw1 as logbr_taxlw1 preserving type)` |  |  |
| `BR_IPITaxLaw` |  | |  | `cast(NFItem.taxlw2 as logbr_taxlw2 preserving type)` |  |  |
| `BR_ISSTaxLaw` |  | |  | `taxlw3` |  |  |
| `BR_COFINSTaxLaw` |  | |  | `taxlw4` |  |  |
| `BR_PISTaxLaw` |  | |  | `cast(NFItem.taxlw5 as logbr_taxlw5 preserving type)` |  |  |
| `GLAccount` |  | |  | `cast(NFItem.cod_cta as logbr_gl_account preserving type)` |  |  |
| `PurchaseOrder` |  | |  | `xped` |  |  |
| `PurchaseOrderItem` |  | |  | `cast(NFItem.nitemped as logbr_purch_ord_item_ext preserving type)` |  |  |
| `InternationalArticleNumber` |  | |  | `cast(NFItem.cean as logbr_article_number preserving type)` |  |  |
| `BR_NFExternalItemNumber` |  | |  | `cast(NFItem.num_item as logbr_ext_item_num preserving type)` |  |  |
| `BR_RECOPINumber` |  | |  | `cast(NFItem.nrecopi as logbr_recopi preserving type)` |  |  |
| `BR_ISSSuspensionProcess` |  | |  | `cast(NFItem.nprocesso as logbr_nfe_nprocesso preserving type)` |  |  |
| `BR_NFTributaryQuantity` |  | |  | `cast(NFItem.menge_trib as logbr_qtdtrb preserving type)` |  |  |
| `BR_NFTributaryUnit` |  | |  | `cast(NFItem.meins_trib as logbr_unttrb preserving type)` |  |  |
| `BR_NFIsPhysicalMvtOfMaterial` |  | |  | `cast(NFItem.ind_mov as logbr_phys_move_mat preserving type)` |  |  |
| `BR_NFItemHasTaxIncentive` |  | |  | `indincentivo` |  |  |
| `BR_NFPriceAmountWithTaxes` |  | |  | `cast(NFItem.nfpri as j_1bnfpri preserving type)` |  |  |
| `BR_NFValueAmountWithTaxes` |  | |  | `nfnet` |  |  |
| `BR_NFDiscountAmountWithTaxes` |  | |  | `nfdis` |  |  |
| `BR_NFFreightAmountWithTaxes` |  | |  | `nffre` |  |  |
| `BR_NFInsuranceAmountWithTaxes` |  | |  | `nfins` |  |  |
| `BR_NFExpensesAmountWithTaxes` |  | |  | `nfoth` |  |  |
| `BR_NFExemptedICMSWithTaxes` |  | |  | `nficmsdeson` |  |  |
| `BR_NFTotalAmountWithTaxes` |  | |  | `nfnett` |  |  |
| `BR_TaxCode` |  | |  | `mwskz` |  |  |
| `ActivityNumber` |  | |  | `srvnr` |  |  |
| `CreditCalculationBaseCode` |  | |  | `nat_bc_cred` |  |  |
| `BR_ReducnPctEffctvCalcBasis` |  | |  | `cast(NFItem.predbcefet as logbr_predbcefet preserving type)` |  |  |
| `BR_EffctvCalcBasisAmount` |  | |  | `cast(NFItem.vbcefet as logbr_vbcefet preserving type)` |  |  |
| `BR_EffectiveICMSRate` |  | |  | `picmsefet` |  |  |
| `BR_EffectiveICMSAmount` |  | |  | `cast(NFItem.vicmsefet as logbr_vicmsefet preserving type)` |  |  |
| `ProductionIsInRelevantScale` |  | |  | `cast(NFItem.indescala as logbr_indescala preserving type)` |  |  |
| `BR_ManufacturerCNPJ` |  | |  | `cast(case when NFItem.cnpjfab > '99999999999999' then '00000000000000' else NFItem.cnpjfab end as logbr_cnpj_numc)` |  |  |
| `BR_ManufacturerCNPJ_2` |  | |  | `cast(NFItem.cnpjfab as logbr_cnpjfab preserving type)` |  |  |
| `TaxIncentiveCode` |  | |  | `cast(NFItem.cbenef as logbr_cbenef preserving type)` |  |  |
| `BR_ICMSSTDestTaxBaseAmount` |  | |  | `cast(NFItem.vbcstdest as logbr_vbcstdest preserving type)` |  |  |
| `BR_ICMSSTDestTaxAmount` |  | |  | `cast(NFItem.vicmsstdest as logbr_vicmsstdest preserving type)` |  |  |
| `BR_FCPOnICMSSTWithheldBaseAmt` |  | |  | `cast(NFItem.vbcfcpstret as logbr_vbcfcpstret preserving type)` |  |  |
| `BR_FCPonICMSSTWithheldRate` |  | |  | `cast(NFItem.pfcpstret as logbr_pfcpstret preserving type)` |  |  |
| `CustomsChargesAmount` |  | |  | `cast(NFItem.vdespadu as logbr_vdespadu preserving type)` |  |  |
| `BR_FCPOnICMSSTWithheldAmount` |  | |  | `cast(NFItem.vfcpstret as logbr_vfcpstret preserving type)` |  |  |
| `BR_IOFTaxAmount` |  | |  | `cast(NFItem.viof as logbr_viof preserving type)` |  |  |
| `BR_ICMSSTRateIncludingFCP` |  | |  | `pst` |  |  |
| `BR_NFeStatisticalAmount` |  | |  | `voutro` |  |  |
| `SalesDocumentCurrency` |  | | `_BR_NFDocumentCurrency` | `SalesDocumentCurrency` |  |  |
| `BR_NFPartnerCNAE` |  | |  | `item_cnae_partner` |  |  |
| `BR_BusinessPlaceCNAE` |  | |  | `item_cnae_bupla` |  |  |
| `BR_NFFreightNature` |  | |  | `ind_nat_frt` |  |  |
| `BR_InternalBarcode` |  | |  | `cast(NFItem.cbarra as logbr_cbarra preserving type)` |  |  |
| `BR_InternalTributaryBarcode` |  | |  | `cast(NFItem.cbarra_trib as logbr_cbarra_trib preserving type)` |  |  |
| `BR_NFIsPISSTInTotalAmount` |  | |  | `cast(NFItem.indsomapisst as logbr_indsomapisst preserving type)` |  |  |
| `BR_PISSTInNFTotal` |  | |  | `cast(NFItem.indsomapisst as logbr_indsomapisst preserving type)` |  |  |
| `BR_PISSTTaxAmount` |  | |  | `cast(NFItem.pisst as logbr_pisst preserving type)` |  |  |
| `BR_PISSTTaxIncludedTaxAmount` |  | |  | `cast(NFItem.nfpisst as logbr_nfpisst preserving type)` |  |  |
| `BR_NFIsCOFINSSTInTotalAmount` |  | |  | `cast(NFItem.indsomacofinsst as logbr_indsomacofinsst preserving type)` |  |  |
| `BR_COFINSSTInNFTotal` |  | |  | `cast(NFItem.indsomacofinsst as logbr_indsomacofinsst preserving type)` |  |  |
| `BR_COFINSSTTaxAmount` |  | |  | `cast(NFItem.cofinsst as logbr_cofinsst preserving type)` |  |  |
| `BR_COFINSSTTxIncludedTaxAmount` |  | |  | `cast(NFItem.nfcofinsst as logbr_nfcofinsst preserving type)` |  |  |
| `BR_ExclICMSAmtFromPISAndCOFINS` |  | |  | `cast(NFItem.excluded_icms_from_piscofins as logbr_exc_icms_piscof preserving type)` |  |  |
| `BR_ICMSDefermentPercent` |  | |  | `cast(NFItem.pdif as logbr_pdif preserving type)` |  |  |
| `BR_FCPOnICMSDefermentAmount` |  | |  | `cast(NFItem.vfcpdif as logbr_vfcpdif preserving type)` |  |  |
| `BR_FCPOnICMSDeferralTaxRate` |  | |  | `cast(NFItem.pfcpdef as logbr_pfcpdef preserving type)` |  |  |
| `BR_FCPOnICMSDefermentPercent` |  | |  | `cast(NFItem.pfcpdif as logbr_pfcpdif preserving type)` |  |  |
| `BR_ExemptedICMSSTAmount` |  | |  | `cast(NFItem.vicmsstdeson as logbr_vicmsstdeson preserving type)` |  |  |
| `BR_ICMSSTExemptionReason` |  | |  | `cast(NFItem.motdesicmsst as logbr_motdesicmsst preserving type)` |  |  |
| `BR_NFMonoICMSDeferredAmount` |  | |  | `cast(NFItem.vicmsmonodif as logbr_vicmsmonodif preserving type)` |  |  |
| `BR_NFAdRemICMSRetainedTaxRate` |  | |  | `cast(NFItem.adremicmsret as logbr_adremicmsret preserving type)` |  |  |
| `BR_NFMonoICMSRetainedAmount` |  | |  | `cast(NFItem.vicmsmonoret as logbr_vicmsmonoret preserving type)` |  |  |
| `BR_NFMonoRetainedTaxedQuantity` |  | |  | `cast(NFItem.qbcmonoret as logbr_qbcmonoret preserving type)` |  |  |
| `BR_NFAdRemICMSReductionReason` |  | |  | `cast(NFItem.motredadrem as logbr_motredadrem preserving type)` |  |  |
| `BR_NFAdRemICMSReductionRate` |  | |  | `cast(NFItem.predadrem as logbr_predadrem preserving type)` |  |  |
| `BR_NFMonoICMSOperationAmount` |  | |  | `cast(NFItem.vicmsmonoop as logbr_vicmsmonoop preserving type)` |  |  |
| `BR_NFAdRemICMSDeferralPercent` |  | |  | `cast(NFItem.adremicmspdif as logbr_adremicmspdif preserving type )` |  |  |
| `BR_FsclBnftCodeTxBaseReduction` |  | |  | `cast(NFItem.cbenef_rbc as logbr_rbcfiscalbenefitcode preserving type)` |  |  |
| `BR_IsICMSDdctdNFTotal` |  | |  | `cast(NFItem.inddeduzdeson as logbr_inddeduzdeson preserving type)` |  |  |
| `BR_IBSAndCBSIntTaxSitnCode` |  | |  | `cast(NFItem.taxsituation as logbr_tax_situation preserving type)` |  |  |
| `BR_IBSAndCBSTaxSituationCode` |  | |  | `cast(NFItem.cst as logbr_cbs_ibs_cst preserving type)` |  |  |
| `BR_IBSAndCBSTaxClfnCode` |  | |  | `cast(NFItem.cclasstrib as logbr_cbs_ibs_cclasstrib preserving type )` |  |  |
| `BR_StateIBSRate` |  | |  | `pibsuf` |  |  |
| `BR_StateIBSDeferralPercent` |  | |  | `pdifibsuf` |  |  |
| `BR_StateIBSDeferralAmount` |  | |  | `vdifibsuf` |  |  |
| `BR_StateIBSTaxRefundAmount` |  | |  | `vdevtribibsuf` |  |  |
| `BR_StateIBSRateReducnPercent` |  | |  | `predaliqibsuf` |  |  |
| `BR_MunicipalIBSRate` |  | |  | `pibsmun` |  |  |
| `BR_MncplIBSDeferralPercent` |  | |  | `pdifibsmun` |  |  |
| `BR_MncplIBSDeferralAmount` |  | |  | `vdifibsmun` |  |  |
| `BR_MncplIBSTaxRefundAmount` |  | |  | `vdevtribibsmun` |  |  |
| `BR_MncplIBSRateReducnPercent` |  | |  | `predaliqibsmun` |  |  |
| `BR_CBSRate` |  | |  | `cast(NFItem.pcbs as logbr_pcbs preserving type )` |  |  |
| `BR_CBSDeferralPercent` |  | |  | `pdifcbs` |  |  |
| `BR_CBSDeferralAmount` |  | |  | `vdifcbs` |  |  |
| `BR_CBSTaxRefundAmount` |  | |  | `vdevtribcbs` |  |  |
| `BR_CBSRateReducnPercent` |  | |  | `cast(NFItem.predaliqcbs as logbr_cbs_rate_reduction preserving type )` |  |  |
| `BR_IBSAndCBSRegularIntSitnCode` |  | |  | `cast(NFItem.taxsituationreg as logbr_tax_situation preserving type)` |  |  |
| `BR_IBSAndCBSRegularTaxSitnCode` |  | |  | `cstreg` |  |  |
| `BR_IBSAndCBSRegularTaxClfnCode` |  | |  | `cclasstribreg` |  |  |
| `BR_StateIBSEffectiveRate` |  | |  | `paliqefetregibsuf` |  |  |
| `BR_StateIBSAmount` |  | |  | `vtribregibsuf` |  |  |
| `BR_MunicipalIBSEffectiveRate` |  | |  | `paliqefetregibsmun` |  |  |
| `BR_MunicipalIBSAmount` |  | |  | `vtribregibsmun` |  |  |
| `BR_CBSEffectiveRate` |  | |  | `paliqefetregcbs` |  |  |
| `BR_CBSAmount` |  | |  | `vtribregcbs` |  |  |
| `BR_IBSPresumedCreditClfnCode` |  | |  | `ccredpresibs` |  |  |
| `BR_IBSPresumedCreditPercent` |  | |  | `pcredpresibs` |  |  |
| `BR_IBSPresumedCreditAmount` |  | |  | `vcredpresibs` |  |  |
| `BR_IBSPrsmdCrdtSuspCndnAmount` |  | |  | `vcredprescondsusibs` |  |  |
| `BR_CBSPresumedCrdtClfnCode` |  | |  | `ccredprescbs` |  |  |
| `BR_CBSPresumedCreditPercent` |  | |  | `pcredprescbs` |  |  |
| `BR_CBSPresumedCreditAmount` |  | |  | `vcredprescbs` |  |  |
| `BR_CBSPrsmdCrdtSuspCndnAmount` |  | |  | `vcredprescondsuscbs` |  |  |
| `BR_ReferencedDFeAccessKey` |  | |  | `chavedeacessodfe` |  |  |
| `BR_ReferencedDFeItemNumber` |  | |  | `nitemdfe` |  |  |
| `BR_UsedMovableAsset` |  | |  | `indbemmovelusado` |  |  |
| `BR_GvmntProcmtStateIBSRate` |  | |  | `pibsufgovpur` |  |  |
| `BR_GvmntProcmtStateIBSFullAmt` |  | |  | `vibsufgovpur` |  |  |
| `BR_GvmntProcmtMncplIBSRate` |  | |  | `pibsmungovpur` |  |  |
| `BR_GvmntProcmtMncplIBSFullAmt` |  | |  | `vibsmungovpur` |  |  |
| `BR_GvmntProcmtCBSRate` |  | |  | `pcbsgovpur` |  |  |
| `BR_GvmntProcmtCBSFullAmount` |  | |  | `vcbsgovpur` |  |  |
| `BR_CreditTransferIBSAmount` |  | |  | `vibstransfcred` |  |  |
| `BR_CreditTransferCBSAmount` |  | |  | `vcbstransfcred` |  |  |
| `BR_FreeTxZoneIBSPrsmdCrdtClfn` |  | |  | `tpcredpresibszfm` |  |  |
| `BR_FreeTxZoneIBSPrsmdCrdtAmt` |  | |  | `vcredpresibszfm` |  |  |
| `BR_FreeTxZoneIBSSbcalcClfnCode` |  | |  | `tpcredpresibszfmprod` |  |  |
| `BR_NatureOfDonationOperation` |  | |  | `inddoacao` |  |  |
| `BR_ValidationAdjustmentPeriod` |  | |  | `competapurajustecompet` |  |  |
| `BR_IBSValdtnAdjustmentAmount` |  | |  | `vibsajustecompet` |  |  |
| `BR_CBSValdtnAdjustmentAmount` |  | |  | `vcbsajustecompet` |  |  |
| `BR_IBSReversalAmount` |  | |  | `vibsestcred` |  |  |
| `BR_CBSReversalAmount` |  | |  | `vcbsestcred` |  |  |
| `BR_PresumedCreditBaseAmount` |  | |  | `vbccredpres` |  |  |
| `BR_PresumedCreditClfnCode` |  | |  | `ccredpres` |  |  |
| `BR_FreeTxZoneIBSValdtnPerd` |  | |  | `competapurcredpresibszfm` |  |  |
| `_BaseUnit` | | ✓ | | | | |
| `_NFTributaryUnit` | | ✓ | | | | |
| `_SalesDocumentCurrency` | | ✓ | | | | |
| `_BR_NotaFiscal` | | ✓ | | | | |
| `_BR_ICMSBaseDetn` | | ✓ | | | | |
| `_BR_ICMSExemptionReason` | | ✓ | | | | |
| `_BR_ICMSSTBaseDetn` | | ✓ | | | | |
| `_BR_ICMSTaxSituation` | | ✓ | | | | |
| `_MaterialOrigin` | | ✓ | | | | |
| `_MaterialUsage` | | ✓ | | | | |
| `_BR_CNAEPartner` | | ✓ | | | | |
| `_BR_CNAEBusinessPlace` | | ✓ | | | | |
| `_BR_NFFreightNature` | | ✓ | | | | |
| `_BR_ICMSSTExemptionReason` | | ✓ | | | | |
| `_BR_NFAdRemICMSReducnReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_NFTributaryUnit` | `I_UnitOfMeasure` | [0..1] |
| `_SalesDocumentCurrency` | `I_Currency` | [1..1] |
| `_BR_NFDocumentCurrency` | `I_BR_NFDocumentCurrency` | [1..1] |
| `_BR_NotaFiscal` | `I_BR_NFDocument` | [1..1] |
| `_BR_ICMSBaseDetn` | `I_BR_ICMSBaseDetn` | [0..1] |
| `_BR_ICMSExemptionReason` | `I_BR_ICMSExemptionReason` | [0..1] |
| `_BR_ICMSSTBaseDetn` | `I_BR_ICMSSTBaseDetn` | [0..1] |
| `_BR_ICMSTaxSituation` | `I_BR_ICMSTaxSituation` | [0..1] |
| `_MaterialOrigin` | `I_BR_MaterialOrigin` | [0..1] |
| `_MaterialUsage` | `I_BR_MaterialUsage` | [0..1] |
| `_BR_CNAEPartner` | `I_BR_CNAE` | [0..1] |
| `_BR_CNAEBusinessPlace` | `I_BR_CNAE` | [0..1] |
| `_BR_NFFreightNature` | `I_BR_NFFreightNature` | [0..1] |
| `_BR_ICMSSTExemptionReason` | `I_BR_ICMSSTExemptionReason` | [0..1] |
| `_BR_NFAdRemICMSReducnReason` | `I_BR_NFAdRemICMSReducnReason` | [0..1] |
| `_ExtensionItem` | `E_BR_NotaFiscalItem` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFITEM'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Brazil Nota Fiscal Item'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.modelingPattern: #NONE

define view I_BR_NFItem
  as select from j_1bnflin as NFItem
  association [0..1] to I_UnitOfMeasure            as _BaseUnit                 on $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure            as _NFTributaryUnit          on $projection.BR_NFTributaryUnit = _NFTributaryUnit.UnitOfMeasure

  association [1..1] to I_Currency                 as _SalesDocumentCurrency    on $projection.SalesDocumentCurrency = _SalesDocumentCurrency.Currency
  association [1..1] to I_BR_NFDocumentCurrency    as _BR_NFDocumentCurrency    on $projection.BR_NotaFiscal = _BR_NFDocumentCurrency.BR_NotaFiscal
  association [1..1] to I_BR_NFDocument            as _BR_NotaFiscal            on $projection.BR_NotaFiscal = _BR_NotaFiscal.BR_NotaFiscal

  association [0..1] to I_BR_ICMSBaseDetn          as _BR_ICMSBaseDetn          on _BR_ICMSBaseDetn.BR_ICMSBaseDetn = $projection.BR_ICMSBaseDetn
  association [0..1] to I_BR_ICMSExemptionReason   as _BR_ICMSExemptionReason   on _BR_ICMSExemptionReason.BR_ICMSExemptionReason = $projection.BR_ICMSExemptionReason
  association [0..1] to I_BR_ICMSSTBaseDetn        as _BR_ICMSSTBaseDetn        on _BR_ICMSSTBaseDetn.BR_ICMSSTBaseDetermination = $projection.BR_ICMSSTBaseDetermination
  association [0..1] to I_BR_ICMSTaxSituation      as _BR_ICMSTaxSituation      on _BR_ICMSTaxSituation.BR_ICMSTaxSituation = $projection.BR_ICMSTaxSituation
  association [0..1] to I_BR_MaterialOrigin        as _MaterialOrigin           on _MaterialOrigin.BR_MaterialOrigin = $projection.BR_MaterialOrigin
  association [0..1] to I_BR_MaterialUsage         as _MaterialUsage            on _MaterialUsage.BR_MaterialUsage = $projection.BR_MaterialUsage
  association [0..1] to I_BR_CNAE                  as _BR_CNAEPartner           on _BR_CNAEPartner.BR_CNAE = $projection.BR_NFPartnerCNAE
  association [0..1] to I_BR_CNAE                  as _BR_CNAEBusinessPlace     on _BR_CNAEBusinessPlace.BR_CNAE = $projection.BR_BusinessPlaceCNAE
  association [0..1] to I_BR_NFFreightNature       as _BR_NFFreightNature       on _BR_NFFreightNature.BR_NFFreightNature = $projection.BR_NFFreightNature

  association [0..1] to I_BR_ICMSSTExemptionReason as _BR_ICMSSTExemptionReason on _BR_ICMSSTExemptionReason.BR_ICMSSTExemptionReason = $projection.BR_ICMSSTExemptionReason

  association [0..1] to I_BR_NFAdRemICMSReducnReason as _BR_NFAdRemICMSReducnReason on _BR_NFAdRemICMSReducnReason.BR_NFAdRemICMSReductionReason = $projection.BR_NFAdRemICMSReductionReason

  //Extension Association
  association [0..1] to E_BR_NotaFiscalItem        as _ExtensionItem            on  $projection.BR_NotaFiscal = _ExtensionItem.BR_NotaFiscal
                                                                                    and _ExtensionItem.BR_NotaFiscalItem = $projection.BR_NotaFiscalItem

{
  key NFItem.docnum                                                             as BR_NotaFiscal,
  key NFItem.itmnum                                                             as BR_NotaFiscalItem,

      @ObjectModel.foreignKey.association: '_BR_ICMSTaxSituation'
      cast(case NFItem.taxsit
      when 'A' then '41'
      when 'B' then '51'
      else concat(NFItem.taxsit, '0')
      end as logbr_taxsit preserving type)                                      as BR_ICMSTaxSituation,
      cast(NFItem.taxsi2 as logbr_taxsi2 preserving type)                       as BR_IPITaxSituation,
      cast(NFItem.taxsi3 as logbr_isstaxsituation)                              as BR_ISSTaxSituation,
      cast(NFItem.taxsi4 as logbr_taxsi4 preserving type)                       as BR_COFINSTaxSituation,
      cast(NFItem.taxsi5 as logbr_taxsi5 preserving type)                       as BR_PISTaxSituation,
      @ObjectModel.foreignKey.association: '_BR_ICMSBaseDetn'
      cast(NFItem.modbc as logbr_icms_base_det preserving type)                 as BR_ICMSBaseDetn,
      @ObjectModel.foreignKey.association: '_BR_ICMSSTBaseDetn'
      cast(NFItem.modbcst as logbr_icst_base_det preserving type)               as BR_ICMSSTBaseDetermination,
      cast(NFItem.cest as logbr_cest preserving type)                           as BR_ICMSSTLegalClassfctn,

      @Aggregation.default:#SUM
      cast(NFItem.vicmssubstituto as logbr_vicmssubstituto preserving type)     as BR_SubstituteICMSAmount,

      @ObjectModel.foreignKey.association: '_BR_ICMSExemptionReason'
      cast(NFItem.motdesicms as logbr_icmsexemptionreason preserving type)      as BR_ICMSExemptionReason,

      @Aggregation.default:#SUM
      cast(NFItem.vicmsdif as logbr_nfe_rfc_vicmsdif preserving type)           as BR_ICMSDefermentAmount,

      cast(NFItem.picmsdef as logbr_picmsdef preserving type)                   as BR_ICMSDeferralTaxRate,

      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      cast(NFItem.vbcstret as logbr_nfe_rfc_icmsstretbase preserving type)      as BR_WithholdingICMSSTBaseAmount,

      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      cast(NFItem.vicmsstret as logbr_nfe_rfc_icmsstrettaxval preserving type)  as BR_WithholdingICMSSTAmount,
      cast(NFItem.cenq as logbr_ipi_legal_class_code preserving type)           as BR_IPILegalClassification,
      cast(NFItem.clenq as logbr_ipi_class_tbc_bev preserving type)             as BR_TobaccoBeverageIPIClassfctn,
      cast(NFItem.cselo as logbr_ipi_contr_seal_code preserving type)           as BR_IPIControlSealCode,
      cast(NFItem.qselo as logbr_ipi_contr_seal_quan preserving type)           as BR_IPIControlSealQuantityValue,
      NFItem.kostl                                                              as CostCenter,
      NFItem.prctr                                                              as ProfitCenter,
      NFItem.aufnr                                                              as InternalOrder,
      NFItem.nplnr                                                              as ProjectNetwork,
      NFItem.ps_psp_pnr                                                         as WBSElementInternalID,
      NFItem.kstrg                                                              as CostObject,
      NFItem.segment                                                            as Segment,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      NFItem.netfre                                                             as BR_NFNetFreightAmount,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      NFItem.netins                                                             as BR_NFNetInsuranceAmount,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      NFItem.netoth                                                             as BR_NFNetOtherExpensesAmount,
      @Aggregation.default:#SUM
      cast(NFItem.netpr as j_1bnfpri preserving type)                           as NetPriceAmount,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      cast(NFItem.netwr as logbr_netamount preserving type)                     as NetValueAmount,
      cast(NFItem.itmtyp as logbr_itmtyp preserving type)                       as BR_NFItemType,
      NFItem.incltx                                                             as BR_ICMSOrISSIsIncludedInPrice,
      cast(NFItem.statit as logbr_statit preserving type)                       as BR_NFItemIsStatistical,
      NFItem.tmiss                                                              as BR_NFIsServiceItem,
      NFItem.matnr                                                              as Material,
      NFItem.maktx                                                              as MaterialName,
      NFItem.bwkey                                                              as ValuationArea,
      cast(NFItem.bwtar as logbr_bwtar_d preserving type)                       as ValuationType,
      cast(NFItem.matkl as logbr_matkl preserving type)                         as MaterialGroup,
      NFItem.indus3                                                             as BR_CFOPCategory, // DO NOT CHANGE
      @Semantics.quantity.unitOfMeasure:'BaseUnit'
      @Aggregation.default:#SUM
      NFItem.menge                                                              as QuantityInBaseUnit,
      @Semantics.unitOfMeasure:true
      NFItem.meins                                                              as BaseUnit,
      NFItem.werks                                                              as Plant,
      NFItem.charg                                                              as Batch,
      NFItem.reftyp                                                             as BR_NFSourceDocumentType,
      cast(NFItem.refkey as logbr_refkey preserving type)                       as BR_NFSourceDocumentNumber,
      NFItem.refitm                                                             as BR_NFSourceDocumentItem,
      cast(NFItem.docref as logbr_docref preserving type)                       as BR_ReferenceNFNumber,
      cast(NFItem.itmref as logbr_itmref preserving type)                       as BR_ReferenceNFItem,
      cast(NFItem.pipidevol as logbr_nfe_pret preserving type)                  as BR_NFPercentReturned,
      @Aggregation.default:#SUM
      cast(NFItem.netdis as logbr_nfnetdiscountamount)                          as BR_NFNetDiscountAmount,
      @Aggregation.default:#SUM
      cast(NFItem.vicmsdeson as logbr_nfe_vicmsdeson preserving type)           as BR_ExemptedICMSAmount,
      cast(NFItem.ststcl_vicmsdeson as logbr_ststcl_vicmsdeson preserving type) as BR_ICMSStatisticalExemptionAmt,
      cast(NFItem.p_mvast as logbr_pmvast preserving type)                      as BR_ICMSSTMarginAddedPercent,
      @Semantics.booleanIndicator: true
      NFItem.cprb                                                               as BR_CPRBIsRelevant,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      NFItem.netwrt                                                             as BR_NFTotalAmount,
      cast(NFItem.cfop as logbr_cfopcode preserving type)                       as BR_CFOPCode,
      @ObjectModel.foreignKey.association: '_MaterialOrigin'
      cast(NFItem.matorg as logbr_matorg preserving type)                       as BR_MaterialOrigin,
      @ObjectModel.foreignKey.association: '_MaterialUsage'
      cast(NFItem.matuse as logbr_matuse preserving type)                       as BR_MaterialUsage,
      cast(NFItem.ownpro as logbr_ownpro preserving type)                       as IsProducedInhouse, // DO NOT CHANGE
      cast(NFItem.nbm as logbr_steuc preserving type)                           as NCMCode,           // DO NOT CHANGE

      cast(NFItem.nbs as logbr_nbs preserving type)                             as BR_NBSCode,
      NFItem.reinf_service_code                                                 as BR_EFDREINFServiceCode,
      NFItem.lc116_service_code                                                 as BR_LC116ServiceCode,
      NFItem.cbenef_iss                                                         as BR_ISSBenefitCode,
      NFItem.municipal_iss_taxsit                                               as BR_CSTISSCode,

      @Aggregation.default:#SUM
      cast(NFItem.vtottrib as logbr_nf_vtottrib)                                as BR_NFApproximateTotalTaxAmount,
      cast(NFItem.nfci as logbr_nfe_nfci preserving type)                       as BR_FCINumber,
      cast(NFItem.taxlw1 as logbr_taxlw1 preserving type)                       as BR_ICMSTaxLaw,
      cast(NFItem.taxlw2 as logbr_taxlw2 preserving type)                       as BR_IPITaxLaw,
      NFItem.taxlw3                                                             as BR_ISSTaxLaw,
      NFItem.taxlw4                                                             as BR_COFINSTaxLaw,
      cast(NFItem.taxlw5 as logbr_taxlw5 preserving type)                       as BR_PISTaxLaw,
      cast(NFItem.cod_cta as logbr_gl_account preserving type)                  as GLAccount,
      NFItem.xped                                                               as PurchaseOrder,
      cast(NFItem.nitemped as logbr_purch_ord_item_ext preserving type)         as PurchaseOrderItem,
      cast(NFItem.cean as logbr_article_number preserving type)                 as InternationalArticleNumber,
      cast(NFItem.num_item as logbr_ext_item_num preserving type)               as BR_NFExternalItemNumber,
      cast(NFItem.nrecopi as logbr_recopi  preserving type)                     as BR_RECOPINumber,
      cast(NFItem.nprocesso as logbr_nfe_nprocesso preserving type)             as BR_ISSSuspensionProcess,

      @Semantics.quantity.unitOfMeasure:'BR_NFTributaryUnit'
      @Aggregation.default:#SUM
      cast(NFItem.menge_trib as logbr_qtdtrb preserving type)                   as BR_NFTributaryQuantity,
      @Semantics.unitOfMeasure:true
      cast(NFItem.meins_trib as logbr_unttrb preserving type)                   as BR_NFTributaryUnit,
      @Semantics.booleanIndicator: true
      cast(NFItem.ind_mov as logbr_phys_move_mat preserving type)               as BR_NFIsPhysicalMvtOfMaterial,
      NFItem.indincentivo                                                       as BR_NFItemHasTaxIncentive,
      @Aggregation.default:#SUM
      cast(NFItem.nfpri as j_1bnfpri preserving type)                           as BR_NFPriceAmountWithTaxes,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      NFItem.nfnet                                                              as BR_NFValueAmountWithTaxes,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      NFItem.nfdis                                                              as BR_NFDiscountAmountWithTaxes,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      NFItem.nffre                                                              as BR_NFFreightAmountWithTaxes,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      NFItem.nfins                                                              as BR_NFInsuranceAmountWithTaxes,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      NFItem.nfoth                                                              as BR_NFExpensesAmountWithTaxes,

      @Aggregation.default:#SUM
      NFItem.nficmsdeson                                                        as BR_NFExemptedICMSWithTaxes,

      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      NFItem.nfnett                                                             as BR_NFTotalAmountWithTaxes,
      NFItem.mwskz                                                              as BR_TaxCode,
      NFItem.srvnr                                                              as ActivityNumber,
      NFItem.nat_bc_cred                                                        as CreditCalculationBaseCode,
      cast(NFItem.predbcefet as logbr_predbcefet preserving type)               as BR_ReducnPctEffctvCalcBasis,

      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      cast(NFItem.vbcefet as logbr_vbcefet preserving type)                     as BR_EffctvCalcBasisAmount,
      NFItem.picmsefet                                                          as BR_EffectiveICMSRate,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      cast(NFItem.vicmsefet as logbr_vicmsefet preserving type)                 as BR_EffectiveICMSAmount,
      //Scale Production Indicator
      @Semantics.booleanIndicator: true
      cast(NFItem.indescala as logbr_indescala preserving type)                 as ProductionIsInRelevantScale,
      //Manufacturer CNPJ
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BR_ManufacturerCNPJ_2'
      @API.element.decommissioningPlannedForYearMonth: '2026-07'
      cast(case 
        when NFItem.cnpjfab > '99999999999999' 
          then '00000000000000' 
        else NFItem.cnpjfab end as logbr_cnpj_numc)                             as BR_ManufacturerCNPJ,
      cast(NFItem.cnpjfab as logbr_cnpjfab preserving type)                     as BR_ManufacturerCNPJ_2,
      //State Tax Incentive Code
      cast(NFItem.cbenef as logbr_cbenef preserving type)                       as TaxIncentiveCode,

      //ICMS ST Calculation Basis for Destination State
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      cast(NFItem.vbcstdest as logbr_vbcstdest preserving type)                 as BR_ICMSSTDestTaxBaseAmount,

      //ICMS ST for Destination State
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      cast(NFItem.vicmsstdest as logbr_vicmsstdest preserving type)             as BR_ICMSSTDestTaxAmount,

      //Withheld FCP Calculation Basis
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      cast(NFItem.vbcfcpstret as logbr_vbcfcpstret preserving type)             as BR_FCPOnICMSSTWithheldBaseAmt,

      //Percentage of Withheld FCP ST
      cast(NFItem.pfcpstret as logbr_pfcpstret preserving type)                 as BR_FCPonICMSSTWithheldRate,

      //Customs Expense Amount
      @Aggregation.default:#SUM
      cast(NFItem.vdespadu as logbr_vdespadu preserving type)                   as CustomsChargesAmount,

      //Withheld FCP ST Amount
      @Aggregation.default:#SUM
      cast(NFItem.vfcpstret as logbr_vfcpstret preserving type)                 as BR_FCPOnICMSSTWithheldAmount,

      //IOF Amount
      @Aggregation.default:#SUM
      cast(NFItem.viof as logbr_viof preserving type)                           as BR_IOFTaxAmount,
      //Final Consumer Rate
      NFItem.pst                                                                as BR_ICMSSTRateIncludingFCP,

      //Statistical Amount
      @Aggregation.default:#SUM
      NFItem.voutro                                                             as BR_NFeStatisticalAmount,

      @Semantics.currencyCode:true
      _BR_NFDocumentCurrency.SalesDocumentCurrency                                      as SalesDocumentCurrency,

      @ObjectModel.foreignKey.association:'_BR_CNAEPartner'
      NFItem.item_cnae_partner                                                  as BR_NFPartnerCNAE,

      @ObjectModel.foreignKey.association:'_BR_CNAEBusinessPlace'
      NFItem.item_cnae_bupla                                                    as BR_BusinessPlaceCNAE,

      @ObjectModel.foreignKey.association:'_BR_NFFreightNature'
      NFItem.ind_nat_frt                                                        as BR_NFFreightNature,

      cast(NFItem.cbarra as logbr_cbarra preserving type)                       as BR_InternalBarcode,
      cast(NFItem.cbarra_trib as logbr_cbarra_trib preserving type)             as BR_InternalTributaryBarcode,

      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'BR_PISSTInNFTotal'
      @Semantics.booleanIndicator: true
      cast(NFItem.indsomapisst as logbr_indsomapisst preserving type)           as BR_NFIsPISSTInTotalAmount,
      cast(NFItem.indsomapisst as logbr_indsomapisst preserving type)           as BR_PISSTInNFTotal,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      cast(NFItem.pisst as logbr_pisst preserving type)                         as BR_PISSTTaxAmount,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      cast(NFItem.nfpisst as logbr_nfpisst preserving type)                     as BR_PISSTTaxIncludedTaxAmount,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'BR_COFINSSTInNFTotal'
      @Semantics.booleanIndicator: true
      cast(NFItem.indsomacofinsst as logbr_indsomacofinsst preserving type)     as BR_NFIsCOFINSSTInTotalAmount,
      cast(NFItem.indsomacofinsst as logbr_indsomacofinsst preserving type)     as BR_COFINSSTInNFTotal,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      cast(NFItem.cofinsst as logbr_cofinsst preserving type)                   as BR_COFINSSTTaxAmount,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      cast(NFItem.nfcofinsst as logbr_nfcofinsst preserving type)               as BR_COFINSSTTxIncludedTaxAmount,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @OData.v2.amount.noDecimalShift:true
      cast(NFItem.excluded_icms_from_piscofins
                            as logbr_exc_icms_piscof preserving type)           as BR_ExclICMSAmtFromPISAndCOFINS,
      cast(NFItem.pdif as logbr_pdif preserving type)                           as BR_ICMSDefermentPercent,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @OData.v2.amount.noDecimalShift:true
      cast(NFItem.vfcpdif as logbr_vfcpdif preserving type)                     as BR_FCPOnICMSDefermentAmount,
      cast(NFItem.pfcpdef as logbr_pfcpdef preserving type)                     as BR_FCPOnICMSDeferralTaxRate,
      cast(NFItem.pfcpdif as logbr_pfcpdif preserving type)                     as BR_FCPOnICMSDefermentPercent,
      cast(NFItem.vicmsstdeson as logbr_vicmsstdeson preserving type)           as BR_ExemptedICMSSTAmount,
      @ObjectModel.foreignKey.association: '_BR_ICMSSTExemptionReason'
      cast(NFItem.motdesicmsst as logbr_motdesicmsst preserving type)           as BR_ICMSSTExemptionReason,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @OData.v2.amount.noDecimalShift:true
      cast(NFItem.vicmsmonodif as logbr_vicmsmonodif preserving type)           as BR_NFMonoICMSDeferredAmount,
      cast(NFItem.adremicmsret as logbr_adremicmsret preserving type)           as BR_NFAdRemICMSRetainedTaxRate,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @OData.v2.amount.noDecimalShift:true
      cast(NFItem.vicmsmonoret as logbr_vicmsmonoret preserving type)           as BR_NFMonoICMSRetainedAmount,
      @Semantics.quantity.unitOfMeasure:'BaseUnit'
      cast(NFItem.qbcmonoret as logbr_qbcmonoret preserving type)               as BR_NFMonoRetainedTaxedQuantity,
      @ObjectModel.foreignKey.association: '_BR_NFAdRemICMSReducnReason'
      cast(NFItem.motredadrem as logbr_motredadrem preserving type)             as BR_NFAdRemICMSReductionReason,
      cast(NFItem.predadrem as logbr_predadrem preserving type)                 as BR_NFAdRemICMSReductionRate,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @OData.v2.amount.noDecimalShift:true
      cast(NFItem.vicmsmonoop as logbr_vicmsmonoop preserving type)             as BR_NFMonoICMSOperationAmount,
      cast(NFItem.adremicmspdif as logbr_adremicmspdif preserving type )        as BR_NFAdRemICMSDeferralPercent,
      cast(NFItem.cbenef_rbc as logbr_rbcfiscalbenefitcode preserving type)     as BR_FsclBnftCodeTxBaseReduction,

      cast(NFItem.inddeduzdeson as logbr_inddeduzdeson preserving type)         as BR_IsICMSDdctdNFTotal,

      ----- TAX REFORM -----
      cast(NFItem.taxsituation as logbr_tax_situation preserving type)          as BR_IBSAndCBSIntTaxSitnCode,
      cast(NFItem.cst as logbr_cbs_ibs_cst preserving type)                     as BR_IBSAndCBSTaxSituationCode,
      cast(NFItem.cclasstrib as logbr_cbs_ibs_cclasstrib preserving type )      as BR_IBSAndCBSTaxClfnCode,
      NFItem.pibsuf                                                             as BR_StateIBSRate,
      NFItem.pdifibsuf                                                          as BR_StateIBSDeferralPercent,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vdifibsuf                                                          as BR_StateIBSDeferralAmount,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vdevtribibsuf                                                      as BR_StateIBSTaxRefundAmount,
      NFItem.predaliqibsuf                                                      as BR_StateIBSRateReducnPercent,
      NFItem.pibsmun                                                            as BR_MunicipalIBSRate,
      NFItem.pdifibsmun                                                         as BR_MncplIBSDeferralPercent,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vdifibsmun                                                         as BR_MncplIBSDeferralAmount,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vdevtribibsmun                                                     as BR_MncplIBSTaxRefundAmount,
      NFItem.predaliqibsmun                                                     as BR_MncplIBSRateReducnPercent,
      cast(NFItem.pcbs as logbr_pcbs preserving type )                          as BR_CBSRate,
      NFItem.pdifcbs                                                            as BR_CBSDeferralPercent,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vdifcbs                                                            as BR_CBSDeferralAmount,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vdevtribcbs                                                        as BR_CBSTaxRefundAmount,
      cast(NFItem.predaliqcbs as logbr_cbs_rate_reduction preserving type )     as BR_CBSRateReducnPercent,
      cast(NFItem.taxsituationreg as logbr_tax_situation preserving type)       as BR_IBSAndCBSRegularIntSitnCode,
      NFItem.cstreg                                                             as BR_IBSAndCBSRegularTaxSitnCode,
      NFItem.cclasstribreg                                                      as BR_IBSAndCBSRegularTaxClfnCode,
      NFItem.paliqefetregibsuf                                                  as BR_StateIBSEffectiveRate,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vtribregibsuf                                                      as BR_StateIBSAmount,
      NFItem.paliqefetregibsmun                                                 as BR_MunicipalIBSEffectiveRate,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vtribregibsmun                                                     as BR_MunicipalIBSAmount,
      NFItem.paliqefetregcbs                                                    as BR_CBSEffectiveRate,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vtribregcbs                                                        as BR_CBSAmount,
      NFItem.ccredpresibs                                                       as BR_IBSPresumedCreditClfnCode,
      NFItem.pcredpresibs                                                       as BR_IBSPresumedCreditPercent,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vcredpresibs                                                       as BR_IBSPresumedCreditAmount,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vcredprescondsusibs                                                as BR_IBSPrsmdCrdtSuspCndnAmount,
      NFItem.ccredprescbs                                                       as BR_CBSPresumedCrdtClfnCode,
      NFItem.pcredprescbs                                                       as BR_CBSPresumedCreditPercent,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vcredprescbs                                                       as BR_CBSPresumedCreditAmount,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vcredprescondsuscbs                                                as BR_CBSPrsmdCrdtSuspCndnAmount,
      NFItem.chavedeacessodfe                                                   as BR_ReferencedDFeAccessKey,
      NFItem.nitemdfe                                                           as BR_ReferencedDFeItemNumber,
      NFItem.indbemmovelusado                                                   as BR_UsedMovableAsset,
      NFItem.pibsufgovpur                                                       as BR_GvmntProcmtStateIBSRate,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vibsufgovpur                                                       as BR_GvmntProcmtStateIBSFullAmt,
      NFItem.pibsmungovpur                                                      as BR_GvmntProcmtMncplIBSRate,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vibsmungovpur                                                      as BR_GvmntProcmtMncplIBSFullAmt,
      NFItem.pcbsgovpur                                                         as BR_GvmntProcmtCBSRate,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vcbsgovpur                                                         as BR_GvmntProcmtCBSFullAmount,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vibstransfcred                                                     as BR_CreditTransferIBSAmount,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vcbstransfcred                                                     as BR_CreditTransferCBSAmount,
      NFItem.tpcredpresibszfm                                                   as BR_FreeTxZoneIBSPrsmdCrdtClfn,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vcredpresibszfm                                                    as BR_FreeTxZoneIBSPrsmdCrdtAmt,
      NFItem.tpcredpresibszfmprod                                               as BR_FreeTxZoneIBSSbcalcClfnCode,
      NFItem.inddoacao                                                          as BR_NatureOfDonationOperation,
      NFItem.competapurajustecompet                                             as BR_ValidationAdjustmentPeriod,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vibsajustecompet                                                   as BR_IBSValdtnAdjustmentAmount,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vcbsajustecompet                                                   as BR_CBSValdtnAdjustmentAmount,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vibsestcred                                                        as BR_IBSReversalAmount,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vcbsestcred                                                        as BR_CBSReversalAmount,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFItem.vbccredpres                                                        as BR_PresumedCreditBaseAmount,
      NFItem.ccredpres                                                          as BR_PresumedCreditClfnCode,
      NFItem.competapurcredpresibszfm                                           as BR_FreeTxZoneIBSValdtnPerd,

      _BR_NotaFiscal,
      _SalesDocumentCurrency,
      _BaseUnit,
      _NFTributaryUnit,
      _BR_ICMSBaseDetn,
      _BR_ICMSExemptionReason,
      _BR_ICMSSTBaseDetn,
      _BR_ICMSTaxSituation,
      _MaterialOrigin,
      _MaterialUsage,
      _BR_CNAEPartner,
      _BR_CNAEBusinessPlace,
      _BR_NFFreightNature,
      _BR_ICMSSTExemptionReason,
      _BR_NFAdRemICMSReducnReason

}
```
