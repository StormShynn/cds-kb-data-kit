---
name: I_CADUNNINGPROCEDURECATEGORY
description: Cadunningprocedurecategory
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
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
# I_CADUNNINGPROCEDURECATEGORY

**Cadunningprocedurecategory**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CADunningProcedureCategory` | ✓ | |  | `mvtyp` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CADunningProcedureCategoryT` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Dunning Procedure Category'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADunningProcedureCategory',
                sapObjectNodeType.name: 'ContrAcctgDunProcedureCategory',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, 
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S  } }

@VDM.viewType: #BASIC

define view entity I_CADunningProcedureCategory
  as select from tfk047j

  association [0..*] to I_CADunningProcedureCategoryT as _Text on $projection.CADunningProcedureCategory = _Text.CADunningProcedureCategory

{
      @ObjectModel.text.association: '_Text'
  key mvtyp as CADunningProcedureCategory,

      _Text
}
```
