---
name: I_COLLATERALINSURANCE
description: "Collateral Insurance Object Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALINSURANCE')/$value
semantic_en: "Collateral Insurance Object Details"
semantic_vi: "Collateral Insurance Object Details — CDS view giao diện dựa trên cms_ins."
keywords:
  - "collateral"
  - "insurance"
  - "object"
  - "details"
  - "converted"
  - "category"
  - "type"
  - "identifier"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALINSURANCE

**Collateral Insurance Object Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALINSURANCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralInsuranceUUID` | ✓ | |  | `ins_guid` | `RAW(16)` | Insurance GUID |
| `CollateralInsuranceConvertedID` |  | |  | `cast( bintohex( ins_guid ) as cms_dte_obj_refid )` | `CHAR(40)` | Reference ID for the object |
| `CollateralObjectCategory` |  | |  | `ins_category` | `CHAR(6)` | Object Category |
| `CollateralInsuranceType` |  | |  | `ins_typ` | `CHAR(6)` | Insurance Type |
| `CollateralInsuranceIdentifier` |  | |  | `ins_id` | `CHAR(40)` | Insurance ID |
| `CollateralInsuranceDescription` |  | |  | `ins_desc` | `CHAR(30)` | Insurance Description |
| `ColltrlInsuranceBankTaxDebit` |  | |  | `insur_tax_db` | `CHAR(1)` |  Insurance tax to the debit of the bank |
| `ColltrlInsuranceSettlementType` |  | |  | `setlmnt_type` | `CHAR(6)` | Type of settlement |
| `CollateralInsuranceSumAmount` |  | |  | `insur_sum` | `CURR(17)` | Insurance Sum |
| `CollateralInsuranceSumCurrency` |  | |  | `insur_curr` | `CUKY(5)` | Insurance Currency |
| `CollateralInsurancePremiumRate` |  | |  | `prm_rt` | `DEC(10)` | Premium Rate |
| `ColltrlInsurancePremiumAmount` |  | |  | `insur_premium` | `CURR(17)` | Insurance Premium |
| `ColltrlInsurPremiumCurrency` |  | |  | `insur_prm_curr` | `CUKY(5)` | Insurance Currency |
| `CollateralInsuranceTaxRate` |  | |  | `insur_tax_rt` | `DEC(10)` | Insurance tax rate (in %) |
| `CollateralInsuranceTaxAmount` |  | |  | `insur_tax_amt` | `CURR(17)` | Insurance tax amount |
| `CollateralInsuranceTaxCurrency` |  | |  | `insur_tax_curr` | `CUKY(5)` | Tax Currency |
| `CollateralInsuranceStartDate` |  | |  | `ins_strt_dat` | `DATS(8)` | Start date of  insurance |
| `CollateralInsuranceExpiryDate` |  | |  | `insur_expy_dat` | `DATS(8)` | Date of expiry of  insurance |
| `ColltrlInsurRqdCoverAmount` |  | |  | `reqd_insur_cvr` | `CURR(17)` | Required insurance cover |
| `ColltrlInsurRqdCoverCurrency` |  | |  | `reqd_insur_curr` | `CUKY(5)` | Insurance Currency |
| `CollateralInsuranceInsurerName` |  | |  | `insurer_nam` | `CHAR(30)` | Name of the insurer |
| `ColltrlInsurInsurerDescription` |  | |  | `insurer_inf` | `CHAR(30)` | Remarks on insurer |
| `CollateralInsuranceCoverMarket` |  | |  | `cover_mkt` | `CHAR(3)` | Cover Market |
| `ColltrlInsurCovrMktShareAmount` |  | |  | `share_cvr_mkt` | `CURR(17)` | Share of cover market |
| `ColltrlInsurCovrMktShrCurrency` |  | |  | `sh_cvr_mkt_cur` | `CUKY(5)` | Currency for Share of Cover Market |
| `ColltrlInsurContactFirmName` |  | |  | `contact_firm` | `CHAR(30)` | Contact firm |
| `ColltrlInsurContactPartnerName` |  | |  | `contact_partner` | `CHAR(30)` | Contact partner |
| `ColltrlInsurTariffDescription` |  | |  | `tarrif` | `CHAR(30)` | Insurance tariff |
| `ColltrlInsurContractBeginDate` |  | |  | `contract_strt_dt` | `DATS(8)` | Contract begin date |
| `ColltrlInsurContractEndDate` |  | |  | `contract_end_dt` | `DATS(8)` | Contract end date |
| `ColltrlInsurContrCnclsnDate` |  | |  | `contract_con_dt` | `DATS(8)` | Date of conclusion of contract |
| `CollateralInsuranceStatus` |  | |  | `insur_status` | `CHAR(6)` | Status of  insurance |
| `CollateralInsuranceStatusDate` |  | |  | `insur_status_dt` | `DATS(8)` | Status date of  insurance |
| `ColltrlInsurOneTmeContrbnAmt` |  | |  | `sum_one_tm_con` | `CURR(17)` | Sum of one time contribution |
| `ColltrlInsurOneTmeContrbnCrcy` |  | |  | `one_tm_con_cky` | `CUKY(5)` | Currency |
| `ColltrlInsurHasDynamicAdaption` |  | |  | `dynamics` | `CHAR(1)` | Dynamics |
| `ColltrlInsurDynamicsPercent` |  | |  | `per_dynamics` | `DEC(10)` | Percentage of the dynamics |
| `ColltrlInsurTerminationPeriod` |  | |  | `termin_prd` | `NUMC(4)` | Termination period |
| `ColltrlInsurTermnPeriodUnit` |  | |  | `term_prd_unit` | `CHAR(2)` | Indicator: Units of termination period |
| `ColltrlInsuranceRecallPeriod` |  | |  | `recall_prd` | `NUMC(4)` | Recall period |
| `ColltrlInsurRecallPeriodUnit` |  | |  | `recall_prd_unit` | `CHAR(2)` | Indicator: Units of Recall Period |
| `ColltrlInsurSurvlBenefitAmount` |  | |  | `ins_sum_srvl` | `CURR(17)` | Insurance sum incase of survival |
| `ColltrlInsurSurvlBnftCurrency` |  | |  | `ins_sum_srvl_cky` | `CUKY(5)` | Insurance survival Currency |
| `ColltrlInsurDeathBenefitAmount` |  | |  | `ins_sum_dth` | `CURR(17)` | Insurance sum in case of death |
| `ColltrlInsurDthBenefitCurrency` |  | |  | `ins_sum_dth_cky` | `CUKY(5)` | Death benefit currency |
| `ColltrlInsurExpryBenefitAmount` |  | |  | `ins_benf_exp` | `CURR(17)` | Probable benefit on expiry |
| `ColltrlInsurExpryBnftCurrency` |  | |  | `ins_benf_exp_cky` | `CUKY(5)` | Currency for probable benefit on expiry |
| `ColltrlInsurExpiryBenefitDate` |  | |  | `dt_prob_ben_exp` | `DATS(8)` | Date of probable benefit on expiry |
| `CollateralAdminOrgUnit` |  | |  | `admin_org_unit` | `CHAR(12)` | Administration Organizational Unit |
| `CollateralBankArea` |  | |  | `bankarea` | `CHAR(4)` | Bank Area in Collateral Management |
| `_ObjectInsuranceLinkData` | | ✓ | | | | |
| `_ColltrlInsurPersnSpec` | | ✓ | | | | |
| `_ObjectAssetPartner` | | ✓ | | | | |
| `_ObjectAssetDocument` | | ✓ | | | | |
| `_ObjectValuationLinkData` | | ✓ | | | | |
| `_ObjectAssetData` | | ✓ | | | | |
| `_LiquidationData` | | ✓ | | | | |
| `_CollateralInsuranceType` | | ✓ | | | | |
| `_CollateralAdminOrgUnitAttrib` | | ✓ | | | | |
| `_CollateralObjectCategory` | | ✓ | | | | |
| `_ColltrlInsurSettlementType` | | ✓ | | | | |
| `_CollateralInsuranceStatus` | | ✓ | | | | |
| `_ColltrlInsurTermnPeriodUnit` | | ✓ | | | | |
| `_ColltrlInsurRecallPeriodUnit` | | ✓ | | | | |
| `_ColltrlInsuranceSumCurrency` | | ✓ | | | | |
| `_ColltrlInsurPremiumCurrency` | | ✓ | | | | |
| `_ColltrlInsuranceTaxCurrency` | | ✓ | | | | |
| `_ColltrlInsurRqdCoverCurrency` | | ✓ | | | | |
| `_ColltrlInsurCovrMktShrCrcy` | | ✓ | | | | |
| `_ColltrlInsurOneTmeContrbnCrcy` | | ✓ | | | | |
| `_ColltrlInsurSurvlBnftCurrency` | | ✓ | | | | |
| `_ColltrlInsurDthBnftCurrency` | | ✓ | | | | |
| `_ColltrlInsurExpryBnftCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ObjectInsuranceLinkData` | `I_ObjectInsuranceLinkData` | [0..*] |
| `_ColltrlInsurPersnSpec` | `I_ColltrlInsurPersnSpec` | [0..*] |
| `_ObjectAssetPartner` | `I_ObjectAssetPartner` | [0..*] |
| `_ObjectAssetDocument` | `I_ObjectAssetDocument` | [0..*] |
| `_ObjectValuationLinkData` | `I_ObjectValuationLinkData` | [0..*] |
| `_ObjectAssetData` | `I_ObjectAssetData` | [0..*] |
| `_LiquidationData` | `I_LiquidationData` | [0..*] |
| `_CollateralInsuranceType` | `I_CollateralInsuranceType` | [0..1] |
| `_CollateralAdminOrgUnitAttrib` | `I_CollateralAdminOrgUnitAttrib` | [0..1] |
| `_CollateralObjectCategory` | `I_CollateralObjectCategory` | [0..1] |
| `_ColltrlInsurSettlementType` | `I_CollateralAttributeIndType` | [0..1] |
| `_CollateralInsuranceStatus` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColltrlInsurTermnPeriodUnit` | `I_ColltrlInsurFrequencyUnit` | [0..1] |
| `_ColltrlInsurRecallPeriodUnit` | `I_ColltrlInsurFrequencyUnit` | [0..1] |
| `_ColltrlInsuranceSumCurrency` | `I_Currency` | [0..1] |
| `_ColltrlInsurPremiumCurrency` | `I_Currency` | [0..1] |
| `_ColltrlInsuranceTaxCurrency` | `I_Currency` | [0..1] |
| `_ColltrlInsurRqdCoverCurrency` | `I_Currency` | [0..1] |
| `_ColltrlInsurCovrMktShrCrcy` | `I_Currency` | [0..1] |
| `_ColltrlInsurOneTmeContrbnCrcy` | `I_Currency` | [0..1] |
| `_ColltrlInsurSurvlBnftCurrency` | `I_Currency` | [0..1] |
| `_ColltrlInsurDthBnftCurrency` | `I_Currency` | [0..1] |
| `_ColltrlInsurExpryBnftCurrency` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALINSURANCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALINSURANCE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICINSURANCE',
    compiler.compareFilter: true
}
@AccessControl:{
    authorizationCheck: #MANDATORY,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'L',
        dataClass: 'MASTER'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION,
    representativeKey: 'CollateralInsuranceUUID'
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
    delta.changeDataCapture: {
        mapping: [ {
           table : 'CMS_INS',
           role : #MAIN,
           viewElement : ['CollateralInsuranceUUID'],
           tableElement : ['INS_GUID']
        } ]
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Insurance Object Details'
define view I_CollateralInsurance
  as select from cms_ins
  association [0..*] to I_ObjectInsuranceLinkData      as _ObjectInsuranceLinkData       on  $projection.CollateralInsuranceUUID = _ObjectInsuranceLinkData.ObjectInsuranceReferenceUUID
  association [0..*] to I_ColltrlInsurPersnSpec        as _ColltrlInsurPersnSpec         on  $projection.CollateralInsuranceUUID = _ColltrlInsurPersnSpec.CollateralInsuranceUUID
  association [0..*] to I_ObjectAssetPartner           as _ObjectAssetPartner            on  $projection.CollateralInsuranceUUID = _ObjectAssetPartner.ObjectAssetUUID
  association [0..*] to I_ObjectAssetDocument          as _ObjectAssetDocument           on  $projection.CollateralInsuranceUUID = _ObjectAssetDocument.ObjectAssetUUID
  association [0..*] to I_ObjectValuationLinkData      as _ObjectValuationLinkData       on  $projection.CollateralInsuranceUUID = _ObjectValuationLinkData.ObjectValuationLinkUUID
  association [0..*] to I_ObjectAssetData              as _ObjectAssetData               on  $projection.CollateralInsuranceConvertedID = _ObjectAssetData.ObjectAssetReferenceNumber
  association [0..*] to I_LiquidationData              as _LiquidationData               on  $projection.CollateralInsuranceUUID = _LiquidationData.ObjectReferenceUUID
  association [0..1] to I_CollateralInsuranceType      as _CollateralInsuranceType       on  $projection.CollateralObjectCategory = _CollateralInsuranceType.CollateralObjectCategory
                                                                                         and $projection.CollateralInsuranceType  = _CollateralInsuranceType.CollateralInsuranceType
  association [0..1] to I_CollateralAdminOrgUnitAttrib as _CollateralAdminOrgUnitAttrib  on  $projection.CollateralAdminOrgUnit = _CollateralAdminOrgUnitAttrib.CollateralAdminOrgUnit
  association [0..1] to I_CollateralObjectCategory     as _CollateralObjectCategory      on  $projection.CollateralObjectCategory = _CollateralObjectCategory.CollateralObjectCategory
  association [0..1] to I_CollateralAttributeIndType   as _ColltrlInsurSettlementType    on  _ColltrlInsurSettlementType.CollateralAttributeIndCat = 'INS001'
                                                                                         and $projection.ColltrlInsuranceSettlementType            = _ColltrlInsurSettlementType.CollateralAttributeIndType
  association [0..1] to I_CollateralAttributeIndType   as _CollateralInsuranceStatus     on  _CollateralInsuranceStatus.CollateralAttributeIndCat = 'INS003'
                                                                                         and $projection.CollateralInsuranceStatus                = _CollateralInsuranceStatus.CollateralAttributeIndType
  association [0..1] to I_ColltrlInsurFrequencyUnit    as _ColltrlInsurTermnPeriodUnit   on  $projection.ColltrlInsurTermnPeriodUnit = _ColltrlInsurTermnPeriodUnit.ColltrlInsuranceFrequencyUnit
  association [0..1] to I_ColltrlInsurFrequencyUnit    as _ColltrlInsurRecallPeriodUnit  on  $projection.ColltrlInsurRecallPeriodUnit = _ColltrlInsurRecallPeriodUnit.ColltrlInsuranceFrequencyUnit
  association [0..1] to I_Currency                     as _ColltrlInsuranceSumCurrency   on  $projection.CollateralInsuranceSumCurrency = _ColltrlInsuranceSumCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlInsurPremiumCurrency   on  $projection.ColltrlInsurPremiumCurrency = _ColltrlInsurPremiumCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlInsuranceTaxCurrency   on  $projection.CollateralInsuranceTaxCurrency = _ColltrlInsuranceTaxCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlInsurRqdCoverCurrency  on  $projection.ColltrlInsurRqdCoverCurrency = _ColltrlInsurRqdCoverCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlInsurCovrMktShrCrcy    on  $projection.ColltrlInsurCovrMktShrCurrency = _ColltrlInsurCovrMktShrCrcy.Currency
  association [0..1] to I_Currency                     as _ColltrlInsurOneTmeContrbnCrcy on  $projection.ColltrlInsurOneTmeContrbnCrcy = _ColltrlInsurOneTmeContrbnCrcy.Currency
  association [0..1] to I_Currency                     as _ColltrlInsurSurvlBnftCurrency on  $projection.ColltrlInsurSurvlBnftCurrency = _ColltrlInsurSurvlBnftCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlInsurDthBnftCurrency   on  $projection.ColltrlInsurDthBenefitCurrency = _ColltrlInsurDthBnftCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlInsurExpryBnftCurrency on  $projection.ColltrlInsurExpryBnftCurrency = _ColltrlInsurExpryBnftCurrency.Currency

{
  key ins_guid         as CollateralInsuranceUUID,
      cast( bintohex( ins_guid ) as cms_dte_obj_refid ) as CollateralInsuranceConvertedID,
      @ObjectModel.foreignKey.association: '_CollateralObjectCategory'
      ins_category     as CollateralObjectCategory,
      @ObjectModel.foreignKey.association: '_CollateralInsuranceType'
      ins_typ          as CollateralInsuranceType,
      ins_id           as CollateralInsuranceIdentifier,
      ins_desc         as CollateralInsuranceDescription,
      insur_tax_db     as ColltrlInsuranceBankTaxDebit,
      @ObjectModel.foreignKey.association: '_ColltrlInsurSettlementType'
      setlmnt_type     as ColltrlInsuranceSettlementType,
      @Semantics.amount.currencyCode: 'CollateralInsuranceSumCurrency'
      insur_sum        as CollateralInsuranceSumAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlInsuranceSumCurrency'
      insur_curr       as CollateralInsuranceSumCurrency,
      prm_rt           as CollateralInsurancePremiumRate,
      @Semantics.amount.currencyCode: 'ColltrlInsurPremiumCurrency'
      insur_premium    as ColltrlInsurancePremiumAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlInsurPremiumCurrency'
      insur_prm_curr   as ColltrlInsurPremiumCurrency,
      insur_tax_rt     as CollateralInsuranceTaxRate,
      @Semantics.amount.currencyCode: 'CollateralInsuranceTaxCurrency'
      insur_tax_amt    as CollateralInsuranceTaxAmount,
      @Semantics.currencyCode: true
      insur_tax_curr   as CollateralInsuranceTaxCurrency,
      ins_strt_dat     as CollateralInsuranceStartDate,
      insur_expy_dat   as CollateralInsuranceExpiryDate,
      @Semantics.amount.currencyCode: 'ColltrlInsurRqdCoverCurrency'
      reqd_insur_cvr   as ColltrlInsurRqdCoverAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlInsurRqdCoverCurrency'
      reqd_insur_curr  as ColltrlInsurRqdCoverCurrency,
      insurer_nam      as CollateralInsuranceInsurerName,
      insurer_inf      as ColltrlInsurInsurerDescription,
      cover_mkt        as CollateralInsuranceCoverMarket,
      @Semantics.amount.currencyCode: 'ColltrlInsurCovrMktShrCurrency'
      share_cvr_mkt    as ColltrlInsurCovrMktShareAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlInsurCovrMktShrCrcy'
      sh_cvr_mkt_cur   as ColltrlInsurCovrMktShrCurrency,
      contact_firm     as ColltrlInsurContactFirmName,
      contact_partner  as ColltrlInsurContactPartnerName,
      tarrif           as ColltrlInsurTariffDescription,
      contract_strt_dt as ColltrlInsurContractBeginDate,
      contract_end_dt  as ColltrlInsurContractEndDate,
      contract_con_dt  as ColltrlInsurContrCnclsnDate,
      @ObjectModel.foreignKey.association: '_CollateralInsuranceStatus'
      insur_status     as CollateralInsuranceStatus,
      insur_status_dt  as CollateralInsuranceStatusDate,
      @Semantics.amount.currencyCode: 'ColltrlInsurOneTmeContrbnCrcy'
      sum_one_tm_con   as ColltrlInsurOneTmeContrbnAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlInsurOneTmeContrbnCrcy'
      one_tm_con_cky   as ColltrlInsurOneTmeContrbnCrcy,
      @Semantics.booleanIndicator: true
      dynamics         as ColltrlInsurHasDynamicAdaption,
      per_dynamics     as ColltrlInsurDynamicsPercent,
      termin_prd       as ColltrlInsurTerminationPeriod,
      @ObjectModel.foreignKey.association: '_ColltrlInsurTermnPeriodUnit'
      term_prd_unit    as ColltrlInsurTermnPeriodUnit,
      recall_prd       as ColltrlInsuranceRecallPeriod,
      @ObjectModel.foreignKey.association: '_ColltrlInsurRecallPeriodUnit'
      recall_prd_unit  as ColltrlInsurRecallPeriodUnit,
      @Semantics.amount.currencyCode: 'ColltrlInsurSurvlBnftCurrency'
      ins_sum_srvl     as ColltrlInsurSurvlBenefitAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlInsurSurvlBnftCurrency'
      ins_sum_srvl_cky as ColltrlInsurSurvlBnftCurrency,
      @Semantics.amount.currencyCode: 'ColltrlInsurDthBenefitCurrency'
      ins_sum_dth      as ColltrlInsurDeathBenefitAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlInsurDthBnftCurrency'
      ins_sum_dth_cky  as ColltrlInsurDthBenefitCurrency,
      @Semantics.amount.currencyCode: 'ColltrlInsurExpryBnftCurrency'
      ins_benf_exp     as ColltrlInsurExpryBenefitAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlInsurExpryBnftCurrency'
      ins_benf_exp_cky as ColltrlInsurExpryBnftCurrency,
      dt_prob_ben_exp  as ColltrlInsurExpiryBenefitDate,
      admin_org_unit   as CollateralAdminOrgUnit,
      bankarea         as CollateralBankArea,

      _ObjectInsuranceLinkData,
      _ColltrlInsurPersnSpec,
      _ObjectAssetPartner,
      _ObjectAssetDocument,
      _ObjectValuationLinkData,
      _ObjectAssetData,
      _LiquidationData,
      _CollateralInsuranceType,
      _CollateralAdminOrgUnitAttrib,
      _CollateralObjectCategory,
      _ColltrlInsurSettlementType,
      _CollateralInsuranceStatus,
      _ColltrlInsurTermnPeriodUnit,
      _ColltrlInsurRecallPeriodUnit,
      _ColltrlInsuranceSumCurrency,
      _ColltrlInsurPremiumCurrency,
      _ColltrlInsuranceTaxCurrency,
      _ColltrlInsurRqdCoverCurrency,
      _ColltrlInsurCovrMktShrCrcy,
      _ColltrlInsurOneTmeContrbnCrcy,
      _ColltrlInsurSurvlBnftCurrency,
      _ColltrlInsurDthBnftCurrency,
      _ColltrlInsurExpryBnftCurrency

}
```
