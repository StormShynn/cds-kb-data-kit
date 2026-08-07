---
name: I_CURRENCYFIELD
description: Currencyfield
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - currency
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_CURRENCYFIELD

**Currencyfield**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CurrencyField` | ✓ | |  | `cast( dd07l.domvalue_l as fis_crcy_role_field )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CurrencyFieldText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataCategory: #DIMENSION }
@Analytics.technicalName: 'IFICRCYFD'
@EndUserText.label: 'Currency Field'
@ObjectModel: { representativeKey: 'CurrencyField',
                usageType: { sizeCategory: #S,
                             dataClass:  #CUSTOMIZING,
                             serviceQuality: #A },
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_DIMENSION }                                
@Metadata.ignorePropagatedAnnotations: true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@Analytics.internalName:#LOCAL 

define view entity I_CurrencyField as select from dd07l

association [0..*] to I_CurrencyFieldText as _Text on $projection.CurrencyField = _Text.CurrencyField
{
@ObjectModel.text.association: '_Text'
    key cast( dd07l.domvalue_l as fis_crcy_role_field ) as CurrencyField,
    _Text
}
where dd07l.domname = 'FIS_CRCY_ROLE_FIELD' and dd07l.as4local = 'A';
```
