---
name: I_CREDITRISKCLASS
description: "Creditriskclass"
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
# I_CREDITRISKCLASS

**Creditriskclass**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditRiskClass` | ✓ | |  | `cast(risk_class as farp_risk_class preserving type)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CreditRiskClassText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Credit Management Risk Class'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ICREDITRISKCLASS'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'CreditRiskClass'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'CreditRiskClass'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE ]
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CreditRiskClass
  as select from ukm_risk_cl
  association [0..*] to I_CreditRiskClassText as _Text on $projection.CreditRiskClass = _Text.CreditRiskClass
{
      @ObjectModel.text.association: '_Text'
  key cast(risk_class as farp_risk_class preserving type) as CreditRiskClass,
      _Text
};
```
