---
name: I_SALESOFFICE
description: "Salesoffice"
app_component: SD-CRF-ORG-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-CRF
  - SD-CRF-ORG
  - interface-view
  - component:SD-CRF-ORG-2CL
  - lob:Sales & Distribution
---
# I_SALESOFFICE

**Salesoffice**

| Property | Value |
|---|---|
| App Component | `SD-CRF-ORG-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOffice` | ✓ | |  | `vkbur` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SalesOfficeText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'SalesOffice'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Sales Office'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSALESOFFICE'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.preserveKey: true
@Metadata.allowExtensions: true
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true
@ObjectModel.sapObjectNodeType.name: 'SalesOffice'
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #ANALYTICAL_DIMENSION, 
                                        #SEARCHABLE_ENTITY  ]
define view I_SalesOffice 
as select from tvbur
association [0..*] to I_SalesOfficeText  as _Text on $projection.SalesOffice = _Text.SalesOffice
{   
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    @Search.fuzzinessThreshold: 0.8
    @ObjectModel.text.association: '_Text'
    key vkbur as SalesOffice,
    _Text
};
```
