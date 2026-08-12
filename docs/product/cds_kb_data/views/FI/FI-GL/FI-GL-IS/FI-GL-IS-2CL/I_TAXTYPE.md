---
name: I_TAXTYPE
description: "Taxtype"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - tax
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_TAXTYPE

**Taxtype**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaxType` | ✓ | |  | `cast(domvalue_l as mwart)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TaxTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Tax Type'
@VDM.viewType: #BASIC
 
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics.technicalName: 'IFITAXTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'TaxType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'SalesTaxType'

/* start suppress warning key_check */
define view entity I_TaxType as select from dd07l 
/* end suppress warning key_check */

/* start suppress warning calculated_field_check */
  association [0..*] to I_TaxTypeText as _Text on $projection.TaxType = _Text.TaxType
/* end suppress warning calculated_field_check */

{
  @ObjectModel.text.association: '_Text'
  key cast(domvalue_l as mwart) as TaxType,
  
  _Text

} where dd07l.domname = 'MWART' and dd07l.as4local = 'A';
```
