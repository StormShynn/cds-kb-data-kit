---
name: I_FIXEDASSETCOUNTRYDATA
description: "This CDS view provides access to the country-dependent master data of a fixed asset. The country-dependent attributes of the fixed asset business entity provide dimensions of the following countries: India Israel Japan Portugal Russia This CDS view provides the prerequisites for answering the following business questions: What is the country-dependent data of my fixed assets? What are the national classification codes of my fixed assets?"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETCOUNTRYDATA')/$value
semantic_en: "This CDS view provides access to the country-dependent master data of a fixed asset. The country-dependent attributes of the fixed asset business entity provide dimensions of the following countries: India Israel Japan Portugal Russia This CDS view provides the prerequisites for answering the following business questions: What is the country-dependent data of my fixed assets? What are the national classification codes of my fixed assets?"
semantic_vi: "Country/Region Specific Fixed Asset — CDS view giao diện dựa trên glo_faat_md."
keywords:
  - "country/region"
  - "specific"
  - "fixed"
  - "asset"
  - "company"
  - "code"
  - "master"
  - "national"
  - "classification"
  - "depreciation"
  - "group"
tags:
  - FI
  - bo:asset
  - component:FI-FIO-AA-ANA-2CL
  - FI-FIO
  - FI-FIO-AA
  - FI-FIO-AA-ANA
  - FI-FIO-AA-ANA-2CL
  - interface-view
  - lob:finance
  - master-data
---
# I_FIXEDASSETCOUNTRYDATA

**This CDS view provides access to the country-dependent master data of a fixed asset. The country-dependent attributes of the fixed asset business entity provide dimensions of the following countries: India Israel Japan Portugal Russia This CDS view provides the prerequisites for answering the following business questions: What is the country-dependent data of my fixed assets? What are the national classification codes of my fixed assets?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETCOUNTRYDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `comp_code` | `CHAR(4)` | Company Code |
| `MasterFixedAsset` | ✓ | |  | `asset_no` | `CHAR(12)` | Main Asset Number |
| `FixedAsset` | ✓ | |  | `asset_subno` | `CHAR(4)` | Asset Subnumber |
| `NationalClassification` |  | |  | `glo_natl_clfn_code` | `CHAR(12)` | National Classification Code |
| `TaxDepreciationGroup` |  | |  | `glo_tax_depr_grp` | `CHAR(4)` | Tax Depreciation Group |
| `RU_LongSerialNumber` |  | |  | `glo_rus_sernr` | `CHAR(32)` | Russia: Serial Number |
| `RU_WorkwearMaterial` |  | |  | `glo_rus_matnr` | `CHAR(40)` | Material Number |
| `RU_RetiredMasterFixedAsset` |  | |  | `glo_rus_ret_asset_num` | `CHAR(12)` | Number of Retired Asset |
| `RU_RetiredFixedAsset` |  | |  | `glo_rus_ret_asset_sub` | `CHAR(4)` | Subnumber of Retired Asset |
| `RU_ProdTraceabilityStartDate` |  | |  | `glo_rus_trc_begd` | `DATS(8)` | Start date of traceability |
| `RU_ProdTraceabilityEndDate` |  | |  | `glo_rus_trc_endd` | `DATS(8)` | End date of traceability |
| `RU_AssetTNVED` |  | |  | `glo_rus_trc_tnved` | `CHAR(17)` | Foreign Trade Goods Classification Code of the Customs Union |
| `RU_AssetTransportType` |  | |  | `glo_rus_ttx_type` | `CHAR(5)` | Transport Type |
| `RU_VehicleIdNumber` |  | |  | `glo_rus_ttx_vin` | `CHAR(30)` | Manufacturer Vehicle Identification Number for Fleet Object |
| `RU_ManufacturingDate` |  | |  | `glo_rus_ttx_mnfd` | `DATS(8)` | Manufacturing Date |
| `RU_VehicleEcologicalClass` |  | |  | `glo_rus_eco_cls` | `CHAR(1)` | Ecological Class |
| `RU_PropertyAddress` |  | |  | `glo_rus_prt_addr` | `CHAR(10)` | Russia: Property Address |
| `RU_PropertyOwnershipRegnDate` |  | |  | `cast(glo_faat_md.glo_rus_prt_owrd as firu_real_estate_own_regn_date)` | `DATS(8)` | Registration Date of Real Estate Ownership Rights |
| `RU_PropertyOwnershipTermnDate` |  | |  | `cast(glo_faat_md.glo_rus_prt_owtd as firu_real_estate_own_term_date)` | `DATS(8)` | Termination Date of Real Estate Ownership Rights |
| `JP_Annex16AssetStructure` |  | |  | `glo_jp_ax16_strc` | `CHAR(5)` | Japan: Asset Structure of Annex16 |
| `JP_Annex16AssetItem` |  | |  | `glo_jp_ax16_item` | `CHAR(5)` | Japan: Asset Item of Annex16 |
| `JP_Annex16LeasingAgrmtDate` |  | |  | `glo_jp_ax16_lease_agreement_da` | `DATS(8)` | Japan: Leasing Agreement Date of Annex16-4 Report |
| `JP_PrptyTxRptCity` |  | |  | `glo_jp_ptx_city_code` | `CHAR(8)` | Japan: City Code of Property Tax Report |
| `JP_PrptyTxRptClassfctnKey` |  | |  | `glo_jp_ptx_classification_key` | `CHAR(4)` | Japan: Classification Key of Property Tax Report |
| `JP_PrptyTxRptSpclDepr` |  | |  | `glo_jp_ptx_special_dep_code` | `CHAR(3)` | Japan: Special Depreciation Code of Property Tax Report |
| `JP_PrptyTxRptAddlDepr` |  | |  | `cast(glo_faat_md.glo_jp_ptx_additional_depr_cod as glo_jp_propt_prdcd)` | `CHAR(8)` | Additional Depreciation Code |
| `IN_AssetBlock` |  | |  | `glo_in_blk_key` | `CHAR(5)` | India: Block Key |
| `IN_AssetPutToUseDate` |  | |  | `glo_in_ast_use` | `DATS(8)` | India: Put to use date |
| `IN_AdditionalAssetBlock` |  | |  | `glo_in_adnlblk` | `CHAR(5)` | India: Additional Depreciation Block Key |
| `IN_AssetIsResearchAndDev` |  | |  | `glo_in_r_d_asset` | `CHAR(1)` | India: R & D Asset |
| `IN_AssetIsPriorYear` |  | |  | `glo_in_prior_yr` | `CHAR(1)` | India: Prior Year Transaction |
| `PT_VehicleTypeByEnergy` |  | |  | `glo_pt_vehicletype` | `CHAR(2)` | Portugal: Vehicle Type |
| `PT_VehicleIsWithoutLimit` |  | |  | `glo_pt_isvehiclewolimit` | `CHAR(1)` | Portugal: Is Vehicle Without Limit |
| `PT_BigRepairAssetLink` |  | |  | `glo_pt_repairassetlink` | `CHAR(8)` | Portugal: Repair Asset Link |
| `PT_LandAssetLink` |  | |  | `glo_pt_landassetlink` | `CHAR(8)` | Portugal: Land Asset Link |
| `PT_AssetReportFormCategory` |  | |  | `glo_pt_assetrepformcat` | `CHAR(1)` | Portugal: Asset Report Form Category |
| `PT_AmortizedAssetIsReevaluated` |  | |  | `glo_pt_isamassetreval` | `CHAR(1)` | Portugal: Is Amortized Asset Revaluated |
| `IL_InvmtCtrInternalCode` |  | |  | `glo_il_internal_code` | `CHAR(10)` | Israel: Internal code |
| `IL_InvmtCtrApprovalDocNmbr` |  | |  | `glo_il_approval_number` | `CHAR(15)` | Israel: Approval document number |
| `IL_InvmtCtrApprovalVersion` |  | |  | `glo_il_approval_version` | `CHAR(3)` | Israel: Approval version |
| `IL_InvmtCtrBogusAssetNumber` |  | |  | `glo_il_bogus_anln1` | `CHAR(12)` | Israel: Bogus asset number |
| `IL_InvmtCtrAssetVersion` |  | |  | `glo_il_asset_version` | `CHAR(3)` | Israel: Asset version |
| `RS_GroupDeprExclusionYear` |  | |  | `glo_rs_exclusion_year` | `NUMC(4)` | Exclusion Year |
| `RS_AssetLastInvoiceDate` |  | |  | `glo_rs_last_invoice_date` | `DATS(8)` | Last Invoice Date |
| `PL_AcquisitionProductionDate` |  | |  | `glo_pl_acqn_prodn_date` | `DATS(8)` | Fixed Asset Acquisition/Production Date |
| `PL_AcquisitionDocumentType` |  | |  | `glo_pl_acqn_doc_type` | `CHAR(1)` | Acquisition Document Type |
| `PL_AcquisitionFormNumber` |  | |  | `glo_pl_acqn_form_nmbr` | `CHAR(25)` | Asset Acquisition Form/OT Document Number |
| `PL_AssetTaxGroup` |  | |  | `glo_pl_ast_tax_group` | `CHAR(2)` | SAFT Asset Tax Group |
| `Country` |  | |  | `land1` | `CHAR(3)` | Country/Region Key |
| `_FixedAsset` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FixedAsset` | `I_FixedAsset` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETCOUNTRYDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETCOUNTRYDATA')/$value)*

```abap
@AbapCatalog: {sqlViewName:'IFIASTCNTRYDATA', preserveKey: true}
@Analytics: { dataCategory: #DIMENSION,
              dataExtraction: {
                  enabled: true,
                  delta.changeDataCapture: {
                      mapping:[
                          { table: 'glo_faat_md', role: #MAIN,
                            viewElement: ['CompanyCode', 'MasterFixedAsset','FixedAsset'],
                            tableElement: ['comp_code', 'asset_no','asset_subno']
                          },
                          { table: 't001', role: #LEFT_OUTER_TO_ONE_JOIN,
                            viewElement: ['CompanyCode'],
                            tableElement: ['bukrs']
                          }]
                        }
                    }
                 }
@EndUserText.label: 'Country/Region Specific Fixed Asset'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ObjectModel: { representativeKey: 'FixedAsset',
                usageType.serviceQuality: #C,
                usageType.sizeCategory: #L,
                usageType.dataClass: #MASTER }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE]
@Metadata:{ignorePropagatedAnnotations: true, allowExtensions:true}
@ObjectModel.sapObjectNodeType.name: 'FixedAsset'

define view I_FixedAssetCountryData

  as select from glo_faat_md
    left outer to one join t001                                 on t001.bukrs = glo_faat_md.comp_code
  //Association with Asset Master Reference
  association [1..1] to I_FixedAsset       as _FixedAsset       on  $projection.CompanyCode      = _FixedAsset.CompanyCode
                                                                and $projection.MasterFixedAsset = _FixedAsset.MasterFixedAsset
                                                                and $projection.FixedAsset       = _FixedAsset.FixedAsset

  association [0..1] to I_CompanyCode      as _CompanyCode      on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Country          as _Country          on  $projection.Country = _Country.Country
  association [0..1] to I_MasterFixedAsset as _MasterFixedAsset on  $projection.CompanyCode      = _MasterFixedAsset.CompanyCode
                                                                and $projection.MasterFixedAsset = _MasterFixedAsset.MasterFixedAsset
{
      //Key fields
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
  key glo_faat_md.comp_code as CompanyCode,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MasterFixedAssetStdVH', element: 'MasterFixedAsset' },
                                            additionalBinding:  [ { localElement: 'CompanyCode', element:'CompanyCode' } ]
                                        } ]
  key glo_faat_md.asset_no as MasterFixedAsset,
  key glo_faat_md.asset_subno as FixedAsset,

      //National Classification
      glo_faat_md.glo_natl_clfn_code as NationalClassification,
      glo_faat_md.glo_tax_depr_grp as TaxDepreciationGroup,

      //RU General Data
      glo_faat_md.glo_rus_sernr as RU_LongSerialNumber,
      glo_faat_md.glo_rus_matnr as RU_WorkwearMaterial,
      glo_faat_md.glo_rus_ret_asset_num as RU_RetiredMasterFixedAsset,
      glo_faat_md.glo_rus_ret_asset_sub as RU_RetiredFixedAsset,
    //RU Traceability
      glo_faat_md.glo_rus_trc_begd as RU_ProdTraceabilityStartDate,
      glo_faat_md.glo_rus_trc_endd as RU_ProdTraceabilityEndDate,  
      glo_faat_md.glo_rus_trc_tnved as RU_AssetTNVED,      
      //RU Transport Tax
      glo_faat_md.glo_rus_ttx_type as RU_AssetTransportType,
      glo_faat_md.glo_rus_ttx_vin as RU_VehicleIdNumber,
      glo_faat_md.glo_rus_ttx_mnfd as RU_ManufacturingDate,
      glo_faat_md.glo_rus_eco_cls as RU_VehicleEcologicalClass,
      glo_faat_md.glo_rus_prt_addr as RU_PropertyAddress,
      cast(glo_faat_md.glo_rus_prt_owrd as firu_real_estate_own_regn_date) as RU_PropertyOwnershipRegnDate,
      cast(glo_faat_md.glo_rus_prt_owtd as firu_real_estate_own_term_date) as RU_PropertyOwnershipTermnDate,

      //JP specific fields for Property Tax Report and Annex-16 Report
      glo_faat_md.glo_jp_ax16_strc as JP_Annex16AssetStructure,
      glo_faat_md.glo_jp_ax16_item as JP_Annex16AssetItem,
      glo_faat_md.glo_jp_ax16_lease_agreement_da as JP_Annex16LeasingAgrmtDate,
      glo_faat_md.glo_jp_ptx_city_code as JP_PrptyTxRptCity,
      glo_faat_md.glo_jp_ptx_classification_key as JP_PrptyTxRptClassfctnKey,
      glo_faat_md.glo_jp_ptx_special_dep_code as JP_PrptyTxRptSpclDepr,
      cast(glo_faat_md.glo_jp_ptx_additional_depr_cod as glo_jp_propt_prdcd) as JP_PrptyTxRptAddlDepr,

      //IN specific fields
      glo_faat_md.glo_in_blk_key as IN_AssetBlock,
      glo_faat_md.glo_in_ast_use as IN_AssetPutToUseDate,
      glo_faat_md.glo_in_adnlblk as IN_AdditionalAssetBlock,
      glo_faat_md.glo_in_r_d_asset as IN_AssetIsResearchAndDev,
      glo_faat_md.glo_in_prior_yr as IN_AssetIsPriorYear,

      //PT specific fields for Fiscal Maps
      glo_faat_md.glo_pt_vehicletype as PT_VehicleTypeByEnergy,
      glo_faat_md.glo_pt_isvehiclewolimit as PT_VehicleIsWithoutLimit,
      glo_faat_md.glo_pt_repairassetlink as PT_BigRepairAssetLink,
      glo_faat_md.glo_pt_landassetlink as PT_LandAssetLink,
      glo_faat_md.glo_pt_assetrepformcat as PT_AssetReportFormCategory,
      glo_faat_md.glo_pt_isamassetreval as PT_AmortizedAssetIsReevaluated,

      //IL Investment center
      glo_faat_md.glo_il_internal_code as IL_InvmtCtrInternalCode,
      glo_faat_md.glo_il_approval_number as IL_InvmtCtrApprovalDocNmbr,
      glo_faat_md.glo_il_approval_version as IL_InvmtCtrApprovalVersion,
      glo_faat_md.glo_il_bogus_anln1 as IL_InvmtCtrBogusAssetNumber,
      glo_faat_md.glo_il_asset_version as IL_InvmtCtrAssetVersion,
      
      //RS specific fields in new asset master
      glo_faat_md.glo_rs_exclusion_year as RS_GroupDeprExclusionYear,
      glo_faat_md.glo_rs_last_invoice_date as RS_AssetLastInvoiceDate,
      
      //PL specific fields in new asset master
      glo_faat_md.glo_pl_acqn_prodn_date   as PL_AcquisitionProductionDate,
      glo_faat_md.glo_pl_acqn_doc_type     as PL_AcquisitionDocumentType,
      glo_faat_md.glo_pl_acqn_form_nmbr    as PL_AcquisitionFormNumber,
      glo_faat_md.glo_pl_ast_tax_group     as PL_AssetTaxGroup,
      
      @ObjectModel.foreignKey.association: '_Country'
      t001.land1 as Country,

      // Define association to parent
      @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _CompanyCode,
      _Country,
      _FixedAsset,
      _MasterFixedAsset
}
```
