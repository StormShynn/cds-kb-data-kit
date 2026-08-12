---
name: I_CREDITACCOUNTADDITIONALINFO
description: "Creditaccountadditionalinfo"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CR
  - interface-view
  - credit
  - component:FIN-FSCM-CR-2CL
  - lob:Other
---
# I_CREDITACCOUNTADDITIONALINFO

**Creditaccountadditionalinfo**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` |  |  |
| `CreditSegment` | ✓ | |  | `cast(criter as ukm_credit_sgmnt preserving type)` |  |  |
| `CrdtAcctInformationCategory` | ✓ | |  | `addtype` |  |  |
| `CrdtAcctInformationType` | ✓ | |  | `data_type` |  |  |
| `CrdtAcctAddInfoUTCDateTime` | ✓ | |  | `timestamp` |  |  |
| `AdditionalCreditDocSequence` | ✓ | |  | `counter` |  |  |
| `ExceptionIsCreditCheckRelevant` |  | |  | `cast(xfeld as ukm_check_relevant preserving type )` |  |  |
| `AddlCreditDocAmtInTransacCrcy` |  | |  | `amnt` |  |  |
| `TransactionCurrency` |  | |  | `curr` |  |  |
| `ValidityStartDate` |  | |  | `cast(datefr as ukm_validity_start_date preserving type )` |  |  |
| `ValidityEndDate` |  | |  | `cast(dateto as ukm_validity_end_date preserving type)` |  |  |
| `CreditAccountResubmissionDate` |  | |  | `cast(addate as ukm_resubmission_date preserving type)` |  |  |
| `AdditionalCreditDocComment` |  | |  | `cast(text as ukm_comment preserving type)` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_CreditManagementSegment` | | ✓ | | | | |
| `_CrdtAcctInfoCategory` | | ✓ | | | | |
| `_CrdtAcctInformationType` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_CreditManagementSegment` | `I_CreditManagementSegment` | [0..1] |
| `_CrdtAcctInfoCategory` | `I_CrdtAcctInfoCategory` | [0..1] |
| `_CrdtAcctInformationType` | `I_CrdtAcctInformationType` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Credit Account Additional Information'
@AbapCatalog.sqlViewName: 'ICRDTACCTADDINFO'
@VDM.viewType: #BASIC
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'AdditionalCreditDocSequence'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@Analytics.internalName:#LOCAL
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE ]
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]                                      
define view I_CreditAccountAdditionalInfo
  as select from bp3100

  association [0..1] to I_BusinessPartner         as _BusinessPartner         on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_CreditManagementSegment as _CreditManagementSegment on  $projection.CreditSegment = _CreditManagementSegment.CreditSegment
  association [0..1] to I_CrdtAcctInfoCategory    as _CrdtAcctInfoCategory    on  $projection.CrdtAcctInformationCategory = _CrdtAcctInfoCategory.CrdtAcctInformationCategory
  association [0..1] to I_CrdtAcctInformationType as _CrdtAcctInformationType on  $projection.CrdtAcctInformationCategory = _CrdtAcctInformationType.CrdtAcctInformationCategory
                                                                              and $projection.CrdtAcctInformationType     = _CrdtAcctInformationType.CrdtAcctInformationType
  association [0..1] to I_Currency                as _Currency                on  $projection.TransactionCurrency = _Currency.Currency
{
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key partner                                                  as BusinessPartner,
      @ObjectModel.foreignKey.association: '_CreditManagementSegment'
  key cast(criter as ukm_credit_sgmnt preserving type)         as CreditSegment,
      @ObjectModel.foreignKey.association: '_CrdtAcctInfoCategory'
  key addtype                                                  as CrdtAcctInformationCategory,
      @ObjectModel.foreignKey.association: '_CrdtAcctInformationType'
  key data_type                                                as CrdtAcctInformationType,
      @Semantics.businessDate.from:true
  key timestamp                                                as CrdtAcctAddInfoUTCDateTime,
  key counter                                                  as AdditionalCreditDocSequence,

      @Semantics: { booleanIndicator: true }
      cast(xfeld as ukm_check_relevant preserving type )       as ExceptionIsCreditCheckRelevant,

      @Semantics: { amount: { currencyCode: 'TransactionCurrency' } }
      amnt                                                     as AddlCreditDocAmtInTransacCrcy,

      @Semantics: { currencyCode: true }
      curr                                                     as TransactionCurrency,

      @Semantics: { businessDate: { from: true } }
      cast(datefr as ukm_validity_start_date preserving type ) as ValidityStartDate,

      @Semantics: { businessDate: { to: true } }
      cast(dateto as ukm_validity_end_date preserving type)    as ValidityEndDate,

      @Semantics: { businessDate: { at: true } }
      cast(addate as ukm_resubmission_date preserving type)    as CreditAccountResubmissionDate,

      @Semantics: { text: true }
      cast(text as ukm_comment preserving type)                as AdditionalCreditDocComment,

      _BusinessPartner,
      _CreditManagementSegment,
      _CrdtAcctInfoCategory,
      _CrdtAcctInformationType,
      _Currency
};
```
