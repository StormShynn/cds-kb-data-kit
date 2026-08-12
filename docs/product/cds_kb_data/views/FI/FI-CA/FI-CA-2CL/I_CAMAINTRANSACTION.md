---
name: I_CAMAINTRANSACTION
description: "Camaintransaction"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAMAINTRANSACTION

**Camaintransaction**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAApplicationArea` | ✓ | |  | `applk` |  |  |
| `CAMainTransaction` | ✓ | |  | `hvorg` |  |  |
| `_ApplArea` |  | |  | `_CAApplicationArea` |  |  |
| `_CAApplicationArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |
| `_Text` | `I_CAMainTransactionText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: { dataCategory: #DIMENSION,
              dataExtraction.enabled: true }

@EndUserText.label: 'Document Main Transaction'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'CAMainTransaction',
                sapObjectNodeType.name: 'ContrAcctgMainTransaction',
                supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAMainTransaction
  as select from tfkhvo

  association [1..1] to I_CAApplicationArea     as _CAApplicationArea on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [0..*] to I_CAMainTransactionText as _Text              on  $projection.CAApplicationArea = _Text.CAApplicationArea
                                                                      and $projection.CAMainTransaction = _Text.CAMainTransaction
{
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
  key tfkhvo.applk as CAApplicationArea,
      @ObjectModel.text.association: '_Text'
  key tfkhvo.hvorg as CAMainTransaction,

      /* associations */
      _CAApplicationArea,
      _Text,

      /* deprecated fields */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAApplicationArea'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAApplicationArea'
      _CAApplicationArea as _ApplArea 
}
where
  applk = 'C'
```
