---
name: I_BILLABLECONTROLTEXT
description: Billablecontroltext
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
  - text-view
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_BILLABLECONTROLTEXT

**Billablecontroltext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BillableControl` | ✓ | |  | `cast( bemot as fis_bemot preserving type )` |
| `Language` | ✓ | |  | `spras` |
| `BillableControlName` |  | |  | `cast( bemot_txt as fis_bemot_name preserving type )` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IFIBILLABCTRLT',
                compiler.compareFilter: true }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Billable Control - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BillableControl',
                usageType: { dataClass: #CUSTOMIZING,
                serviceQuality: #A,
                sizeCategory: #S },
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT } 
@VDM.viewType: #BASIC

define view I_BillableControlText
  as select from tbmotx
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cast( bemot as fis_bemot preserving type )          as BillableControl,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key spras                                               as Language,
      @Semantics.text
      cast( bemot_txt as fis_bemot_name preserving type ) as BillableControlName,
      _Language
}
```
