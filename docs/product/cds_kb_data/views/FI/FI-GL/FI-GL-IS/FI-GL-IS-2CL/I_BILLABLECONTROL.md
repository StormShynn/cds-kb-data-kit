---
name: I_BILLABLECONTROL
description: "Billablecontrol"
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
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_BILLABLECONTROL

**Billablecontrol**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillableControl` | ✓ | |  | `cast( bemot as fis_bemot preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BillableControlText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIBILLABCTRL'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Billable Control'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { representativeKey: 'BillableControl',
                sapObjectNodeType.name: 'BillableControl', 
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S },
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_DIMENSION }                                

define view I_BillableControl
  as select from tbmot
  association [0..*] to I_BillableControlText as _Text on $projection.BillableControl = _Text.BillableControl
{
      @ObjectModel.text.association: '_Text'
  key cast( bemot as fis_bemot preserving type ) as BillableControl,
      _Text
}
```
