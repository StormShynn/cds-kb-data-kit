---
name: I_INCOTERMSVERSION
description: "Incotermsversion"
app_component: SD-BF-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-MD
  - interface-view
  - component:SD-BF-MD-2CL
  - lob:Sales & Distribution
---
# I_INCOTERMSVERSION

**Incotermsversion**

| Property | Value |
|---|---|
| App Component | `SD-BF-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncotermsVersion` | ✓ | |  | `incov` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_IncotermsVersionText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel:{ representativeKey: 'IncotermsVersion',
               usageType.dataClass: #CUSTOMIZING,
               usageType.serviceQuality: #A,
               usageType.sizeCategory: #S }
@EndUserText.label: 'Incoterms Version'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IINCOTERMSV'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.sapObjectNodeType.name:'IncotermsVersion'
@ObjectModel.resultSet.sizeCategory: #XS

define view I_IncotermsVersion
  as select from tincv
  association [0..*] to I_IncotermsVersionText as _Text on $projection.IncotermsVersion = _Text.IncotermsVersion
{
      @ObjectModel.text.association: '_Text'
      @Search: { defaultSearchElement: true, ranking: #HIGH }
  key incov as IncotermsVersion,
  
      _Text
}
```
