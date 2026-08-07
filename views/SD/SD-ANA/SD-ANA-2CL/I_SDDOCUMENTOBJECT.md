---
name: I_SDDOCUMENTOBJECT
description: "Sddocumentobject"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - interface-view
  - document
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
---
# I_SDDOCUMENTOBJECT

**Sddocumentobject**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SDDocumentObject` | ✓ | |  | `cast(SUBSTRING(dd07l.domvalue_l, 1, 1) as sd_doc_object preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SDDocumentObjectText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'SDDocumentObject'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@EndUserText.label: 'SD Document Object'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDDOCOBJ' 
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:         #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER ]

define view I_SDDocumentObject
as select from dd07l

association [0..*] to I_SDDocumentObjectText as _Text on $projection.SDDocumentObject = _Text.SDDocumentObject
{
    @ObjectModel.text.association: '_Text'
    key cast(SUBSTRING(dd07l.domvalue_l, 1, 1) as sd_doc_object preserving type ) as SDDocumentObject  ,
    
    //Associations    
    _Text
}

where (dd07l.domname = 'VBOBJ') and (dd07l.as4local = 'A');
```
