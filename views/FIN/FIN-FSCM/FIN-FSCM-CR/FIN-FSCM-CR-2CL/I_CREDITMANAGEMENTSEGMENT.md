---
name: I_CREDITMANAGEMENTSEGMENT
description: Credit ManagementMENTSEGMENT
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
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
# I_CREDITMANAGEMENTSEGMENT

**Credit ManagementMENTSEGMENT**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditSegment` | ✓ | |  | `cast( credit_sgmnt as farp_credit_segment preserving type )` |  |  |
| `CreditSegmentCurrency` |  | |  | `cast( currency as farp_sgm_currency preserving type )` |  |  |
| `ExchangeRateType` |  | |  | `kurst` |  |  |
| `CrdtSgmtIsMainCreditSegment` |  | |  | `main_cred_sgmnt` |  |  |
| `CrdtSgmtIsAddedToMainSgmt` |  | |  | `main_credsgm_add` |  |  |
| `_Text` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_CreditSegmentAddlConfign` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CreditManagementSegmentTxt` | [0..*] |
| `_Currency` | `I_Currency` | [1..1] |
| `_CreditSegmentAddlConfign` | `I_CreditSegmentAddlConfign` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Credit Management Segment'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@AbapCatalog.sqlViewName: 'ICREDMGMNTSEGM'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'CreditSegment'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'CreditSegment'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE ]
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CreditManagementSegment
  as select from ukmcred_sgm0c
  association [0..*] to I_CreditManagementSegmentTxt as _Text                     on $projection.CreditSegment = _Text.CreditSegment
  association [1..1] to I_Currency                   as _Currency                 on $projection.CreditSegmentCurrency = _Currency.Currency
  association [0..1] to I_CreditSegmentAddlConfign   as _CreditSegmentAddlConfign on $projection.CreditSegment = _CreditSegmentAddlConfign.CreditSegment

{
      @ObjectModel.text.association: '_Text'
  key cast( credit_sgmnt as farp_credit_segment preserving type ) as CreditSegment,
      cast( currency as farp_sgm_currency preserving type )       as CreditSegmentCurrency,
      //  limit_valid_chck,
      kurst                                                       as ExchangeRateType,
      main_cred_sgmnt                                             as CrdtSgmtIsMainCreditSegment,
      main_credsgm_add                                            as CrdtSgmtIsAddedToMainSgmt,
      _Text,
      _Currency,
      _CreditSegmentAddlConfign
}
```
