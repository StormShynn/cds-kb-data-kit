---
name: I_CREDITCONTROLAREA
description: "Creditcontrolarea"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_CREDITCONTROLAREA

**Creditcontrolarea**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditControlArea` | ✓ | |  | `cast(kkber as farp_kkber preserving type)` |  |  |
| `CreditControlAreaCurrency` |  | |  | `cast( waers as kkbwr preserving type)` |  |  |
| `_Text` | | ✓ | | | | |
| `_CreditControlArea2Segment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CreditControlAreaText` | [0..*] |
| `_CreditControlArea2Segment` | `I_CreditControlArea2Segment` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Credit Control Area'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICREDCONTAREA'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CreditControlArea'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'CreditControlArea'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations:true
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CreditControlArea
  as select from t014
  association [0..*] to I_CreditControlAreaText     as _Text                      on $projection.CreditControlArea = _Text.CreditControlArea
  association [0..1] to I_CreditControlArea2Segment as _CreditControlArea2Segment on $projection.CreditControlArea = _CreditControlArea2Segment.CreditControlArea
{
      @ObjectModel.text.association: '_Text'
  key cast(kkber as farp_kkber preserving type) as CreditControlArea,
      cast( waers as kkbwr preserving type)     as CreditControlAreaCurrency,
      _Text,
      _CreditControlArea2Segment
};
```
