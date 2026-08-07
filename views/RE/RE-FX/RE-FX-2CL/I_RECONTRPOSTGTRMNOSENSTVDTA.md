---
name: I_RECONTRPOSTGTRMNOSENSTVDTA
description: Recontrpostgtrmnosenstvdta
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - component:RE-FX-2CL
  - lob:Other
---
# I_RECONTRPOSTGTRMNOSENSTVDTA

**Recontrpostgtrmnosenstvdta**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InternalRealEstateNumber` | ✓ | |  | `intreno` |
| `RETermType` | ✓ | |  | `termtype` |
| `RETermNumber` | ✓ | |  | `termno` |
| `ValidityStartDate` | ✓ | |  | `cast(validfrom as rebdvdmvalidfrom preserving type)` |
| `ValidityEndDate` |  | |  | `cast(validto as rebdvdmvalidto preserving type)` |
| `PaymentMethod` |  | |  | `cast(pymtmeth as farp_schzw_bseg)` |
| `REPaymentMethodCreditMemo` |  | |  | `cast(pymtmethcrmo as retmvdmpymtmethcrmo preserving type)` |
| `PaymentBlockingReason` |  | |  | `cast(pymtblock as farp_dzlspr)` |
| `PaymentTerms` |  | |  | `pymtterm` |
| `RENoteToPayeeText` |  | |  | `notetopayee` |
| `DunningArea` |  | |  | `cast(dunnarea as farp_maber)` |
| `DunningKey` |  | |  | `cast(dunnkey as farp_mschl)` |
| `DunningBlockingReason` |  | |  | `cast(dunnblock as farp_mansp)` |
| `REAcctDeterminationKey` |  | |  | `cast(accdetkey as retmvdmaccdetkey preserving type)` |
| `RETaxType` |  | |  | `taxtype` |
| `TaxGroup` |  | |  | `cast(taxgroup as taxgrp)` |
| `REIsConditionGrossAmount` |  | |  | `isgross` |
| `TaxCountry` |  | |  | `cast(taxcountry as retmvdmtaxcountry preserving type)` |
| `BusinessPartner` |  | |  | `partner` |
| `REAccountingObject` |  | |  | `cast(partnerobjnr as retmvdmpartnerobjnr preserving type)` |
| `TaxJurisdiction` |  | |  | `txjcd` |
| `REIsConditionSplit` |  | |  | `iscdsplit` |
| `RECurrencyTranslationRule` |  | |  | `cast(ctrule as retmvdmcactrule preserving type)` |
| `REIsPartnerBlocked` |  | |  | `ispartnerblocked` |
| `RealEstateObjectType` |  | | `_REKeyAssgmt` | `RealEstateObjectType` |
| `CompanyCode` |  | | `_REKeyAssgmt` | `CompanyCode` |
| `Country` |  | | `_REKeyAssgmt._CompanyCode` | `Country` |
| `TaxCalculationProcedure` |  | | `_REKeyAssgmt._CompanyCode._Country` | `TaxCalculationProcedure` |
| `_CompanyCodeCountry` |  | | `_REKeyAssgmt._CompanyCode` | `_Country` |
| `_REContract` | | ✓ | | |
| `_REKeyAssgmt` | | ✓ | | |
| `_RETermType` | | ✓ | | |
| `_RETerm` | | ✓ | | |
| `_PaymentMethod` | | ✓ | | |
| `_PaymentBlockingReason` | | ✓ | | |
| `_PaymentTerms` | | ✓ | | |
| `_DunningArea` | | ✓ | | |
| `_DunningKey` | | ✓ | | |
| `_DunningBlockingReasonCode` | | ✓ | | |
| `_REAcctDeterminationValue` | | ✓ | | |
| `_RETaxType` | | ✓ | | |
| `_RETaxGroup` | | ✓ | | |
| `_Country` | | ✓ | | |
| `_BusinessPartner` | | ✓ | | |
| `_CostCenter` | | ✓ | | |
| `_WBSElement` | | ✓ | | |
| `_InternalOrder` | | ✓ | | |
| `_TaxJurisdiction` | | ✓ | | |
| `_TaxJurisdictionCalcProcedure` | | ✓ | | |
| `_RECurrencyTranslationRule` | | ✓ | | |
| `_REAccountingObject` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REContract` | `I_REContract` | [1..1] |
| `_REKeyAssgmt` | `I_REKeyAssgmt` | [1..1] |
| `_RETermType` | `I_RETermType` | [1..1] |
| `_RETerm` | `I_RETerm` | [1..1] |
| `_PaymentMethod` | `I_PaymentMethod` | [0..1] |
| `_PaymentBlockingReason` | `I_PaymentBlockingReason` | [0..1] |
| `_PaymentTerms` | `I_PaymentTerms` | [0..1] |
| `_DunningArea` | `I_DunningArea` | [0..1] |
| `_DunningKey` | `I_DunningKey` | [0..1] |
| `_DunningBlockingReasonCode` | `I_DunningBlockingReasonCode` | [0..1] |
| `_REAcctDeterminationValue` | `I_REAcctDeterminationValue` | [0..1] |
| `_RETaxType` | `I_RETaxType` | [0..1] |
| `_RETaxGroup` | `I_RETaxGroup` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..1] |
| `_WBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_InternalOrder` | `I_InternalOrder` | [0..1] |
| `_TaxJurisdiction` | `I_TaxJurisdiction` | [0..1] |
| `_TaxJurisdictionCalcProcedure` | `I_TaxJurisCalcProcedure` | [0..1] |
| `_RECurrencyTranslationRule` | `I_RECurrencyTranslationRule` | [0..1] |
| `_REAccountingObject` | `I_REControllingObject` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREPOSTGTRM'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Posting Rule Term'
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  representativeKey: 'RETermNumber',
  semanticKey: ['InternalRealEstateNumber', 'RETermType', 'RETermNumber', 'ValidityStartDate'],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION, 
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'RealEstateContractPostingTerm'
}
@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions: true
}
@VDM.viewType: #BASIC

define view entity I_REContrPostgTrmNoSenstvDta
  as select from vitmpy as _REPostingTerm
  association [1..1] to I_REContract                as _REContract                   on  $projection.InternalRealEstateNumber = _REContract.InternalRealEstateNumber
  association [1..1] to I_REKeyAssgmt               as _REKeyAssgmt                  on  $projection.InternalRealEstateNumber = _REKeyAssgmt.InternalRealEstateNumber
  association [1..1] to I_RETermType                as _RETermType                   on  $projection.RETermType           = _RETermType.RETermType
                                                                                     and $projection.RealEstateObjectType = _RETermType.RealEstateObjectType
  association [1..1] to I_RETerm                    as _RETerm                       on  $projection.InternalRealEstateNumber = _RETerm.InternalRealEstateNumber
                                                                                     and $projection.RETermType               = _RETerm.RETermType
                                                                                     and $projection.RETermNumber             = _RETerm.RETermNumber
  association [0..1] to I_PaymentMethod             as _PaymentMethod                on  $projection.Country       = _PaymentMethod.Country
                                                                                     and $projection.PaymentMethod = _PaymentMethod.PaymentMethod
  association [0..1] to I_PaymentBlockingReason     as _PaymentBlockingReason        on  $projection.PaymentBlockingReason = _PaymentBlockingReason.PaymentBlockingReason
  association [0..1] to I_PaymentTerms              as _PaymentTerms                 on  $projection.PaymentTerms = _PaymentTerms.PaymentTerms
  association [0..1] to I_DunningArea               as _DunningArea                  on  $projection.CompanyCode = _DunningArea.CompanyCode
                                                                                     and $projection.DunningArea = _DunningArea.DunningArea
  association [0..1] to I_DunningKey                as _DunningKey                   on  $projection.DunningKey = _DunningKey.DunningKey
  association [0..1] to I_DunningBlockingReasonCode as _DunningBlockingReasonCode    on  $projection.DunningBlockingReason = _DunningBlockingReasonCode.DunningBlockingReason
  association [0..1] to I_REAcctDeterminationValue  as _REAcctDeterminationValue     on  $projection.REAcctDeterminationKey = _REAcctDeterminationValue.REAcctDeterminationKey
  association [0..1] to I_RETaxType                 as _RETaxType                    on  $projection.Country   = _RETaxType.Country
                                                                                     and $projection.RETaxType = _RETaxType.RETaxType
  association [0..1] to I_RETaxGroup                as _RETaxGroup                   on  $projection.TaxGroup = _RETaxGroup.TaxGroup
  association [0..1] to I_Country                   as _Country                      on  $projection.TaxCountry = _Country.Country
  association [0..1] to I_BusinessPartner           as _BusinessPartner              on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_CostCenter                as _CostCenter                   on  $projection.REAccountingObject = _CostCenter.ObjectInternalID
                                                                                     and _CostCenter.ObjectInternalID is not initial
  association [0..1] to I_WBSElementBasicData       as _WBSElement                   on  $projection.REAccountingObject = _WBSElement.WBSElementObject
  association [0..1] to I_InternalOrder             as _InternalOrder                on  $projection.REAccountingObject = _InternalOrder.ControllingObject
  association [0..1] to I_TaxJurisdiction           as _TaxJurisdiction              on  $projection.TaxJurisdiction         = _TaxJurisdiction.TaxJurisdiction
                                                                                     and $projection.TaxCalculationProcedure = _TaxJurisdiction.TaxJurisdictionCalcProcedure
  association [0..1] to I_TaxJurisCalcProcedure     as _TaxJurisdictionCalcProcedure on  $projection.TaxCalculationProcedure = _TaxJurisdictionCalcProcedure.TaxJurisdictionCalcProcedure
  association [0..1] to I_RECurrencyTranslationRule as _RECurrencyTranslationRule    on  $projection.RECurrencyTranslationRule = _RECurrencyTranslationRule.RECurrencyTranslationRule
  association [0..1] to I_REControllingObject       as _REAccountingObject           on  $projection.REAccountingObject = _REAccountingObject.REAccountingObject
{
       @ObjectModel.foreignKey.association: '_REKeyAssgmt'
  key  intreno                                                    as InternalRealEstateNumber,
       @ObjectModel.foreignKey.association: '_RETermType'
  key  termtype                                                   as RETermType,
  key  termno                                                     as RETermNumber,
       //  key validfrom                                                  as ValidityStartDate,
       @Semantics.businessDate.from: true
  key  cast(validfrom as rebdvdmvalidfrom preserving type)        as ValidityStartDate,
       @Semantics.businessDate.to: true
       cast(validto as rebdvdmvalidto preserving type)            as ValidityEndDate,
       @ObjectModel.foreignKey.association: '_PaymentMethod'
       cast(pymtmeth as farp_schzw_bseg)                          as PaymentMethod,
       cast(pymtmethcrmo as retmvdmpymtmethcrmo preserving type)  as REPaymentMethodCreditMemo,
       @ObjectModel.foreignKey.association: '_PaymentBlockingReason'
       cast(pymtblock as farp_dzlspr)                             as PaymentBlockingReason,
       @ObjectModel.foreignKey.association: '_PaymentTerms'
       pymtterm                                                   as PaymentTerms,
       notetopayee                                                as RENoteToPayeeText,
       @ObjectModel.foreignKey.association: '_DunningArea'
       cast(dunnarea as farp_maber)                               as DunningArea,
       @ObjectModel.foreignKey.association: '_DunningKey'
       cast(dunnkey as farp_mschl)                                as DunningKey,
       @ObjectModel.foreignKey.association: '_DunningBlockingReasonCode'
       cast(dunnblock as farp_mansp)                              as DunningBlockingReason,
       @ObjectModel.foreignKey.association: '_REAcctDeterminationValue'
       cast(accdetkey as retmvdmaccdetkey preserving type)        as REAcctDeterminationKey,
       @ObjectModel.foreignKey.association: '_RETaxType'
       taxtype                                                    as RETaxType,
       @ObjectModel.foreignKey.association: '_RETaxGroup'
       cast(taxgroup as taxgrp)                                   as TaxGroup,
       isgross                                                    as REIsConditionGrossAmount,
       @ObjectModel.foreignKey.association: '_Country'
       cast(taxcountry as retmvdmtaxcountry preserving type)      as TaxCountry,
       @ObjectModel.foreignKey.association: '_BusinessPartner'
       partner                                                    as BusinessPartner,
       @ObjectModel.foreignKey.association: '_REAccountingObject'
       cast(partnerobjnr as retmvdmpartnerobjnr preserving type)  as REAccountingObject,
       @ObjectModel.foreignKey.association: '_TaxJurisdiction'
       txjcd                                                      as TaxJurisdiction,
       iscdsplit                                                  as REIsConditionSplit,
       @ObjectModel.foreignKey.association: '_RECurrencyTranslationRule'
       cast(ctrule as retmvdmcactrule preserving type)            as RECurrencyTranslationRule,
       ispartnerblocked                                           as REIsPartnerBlocked,
       @ObjectModel.foreignKey.association: '_REObjectType'
       _REKeyAssgmt.RealEstateObjectType                          as RealEstateObjectType,
       @ObjectModel.foreignKey.association: '_CompanyCode'
       _REKeyAssgmt.CompanyCode                                   as CompanyCode,
       @ObjectModel.foreignKey.association: '_CompanyCodeCountry'
       _REKeyAssgmt._CompanyCode.Country                          as Country,
       @ObjectModel.foreignKey.association: '_TaxJurisdictionCalcProcedure'
       _REKeyAssgmt._CompanyCode._Country.TaxCalculationProcedure as TaxCalculationProcedure,

       _REContract,
       _REKeyAssgmt,
       _RETermType,
       _RETerm,
       _PaymentMethod,
       _PaymentBlockingReason,
       _PaymentTerms,
       _DunningArea,
       _DunningKey,
       _DunningBlockingReasonCode,
       _REAcctDeterminationValue,
       _RETaxType,
       _RETaxGroup,
       _Country,
       _BusinessPartner,
       _CostCenter,
       _WBSElement,
       _InternalOrder,
       _TaxJurisdiction,
       _RECurrencyTranslationRule,
       _REAccountingObject,
       
       _REKeyAssgmt._CompanyCode,
       _REKeyAssgmt._CompanyCode._Country as _CompanyCodeCountry,
       _REKeyAssgmt._REObjectType,
       _TaxJurisdictionCalcProcedure
}
where
  intreno like 'IS%'
```
