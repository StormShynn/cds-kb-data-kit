---
name: I_REINTEGOBJSPACEGROUPTYPE
description: "Real Estate Int Object Space Group Type"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJSPACEGROUPTYPE')/$value
semantic_en: "Real Estate Int Object Space Group Type"
semantic_vi: "Real Estate Int Object Space Group Type — CDS view giao diện dựa trên tivipiosgtype."
keywords:
  - "real"
  - "estate"
  - "int"
  - "object"
  - "space"
  - "group"
  - "type"
  - "integ"
  - "category"
  - "direction"
  - "reference"
tags:
  - RE
  - component:RE-FX-IP-2CL
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
---
# I_REINTEGOBJSPACEGROUPTYPE

**Real Estate Int Object Space Group Type**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJSPACEGROUPTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REIntegObjSpaceGroupType` | ✓ | |  | `iosgtype` | `CHAR(4)` | Group Type |
| `REIntegObjectCategory` |  | |  | `iocategory` | `CHAR(1)` | Object Category |
| `RESpaceGroupDirection` |  | |  | `iosgdirection` | `CHAR(2)` | Group Direction |
| `REIntegObjectReference` |  | |  | `ioreference` | `CHAR(1)` | Object Reference |
| `_Text` | | ✓ | | | | |
| `_REIntegObjectCategory` | | ✓ | | | | |
| `_RESpaceGroupDirection` | | ✓ | | | | |
| `_REIntegObjectReference` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_REIntegObjSpaceGroupTypeText` | [0..*] |
| `_REIntegObjectCategory` | `I_REIntegObjectCategory` | [0..1] |
| `_RESpaceGroupDirection` | `I_RESpaceGroupDirection` | [0..1] |
| `_REIntegObjectReference` | `I_REIntegObjectReference` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJSPACEGROUPTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJSPACEGROUPTYPE')/$value)*

```abap
@EndUserText.label: 'Real Estate Int Object Space Group Type'
@AbapCatalog.sqlViewName: 'IREINTOBJSGTYPE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.representativeKey: 'REIntegObjSpaceGroupType'
@ObjectModel.semanticKey: ['REIntegObjSpaceGroupType' ]
//@ClientDependent: true
@VDM.viewType: #BASIC
//@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #VALUE_HELP_PROVIDER,
                                        #SEARCHABLE_ENTITY                   ]

@Analytics:{
    dataExtraction: {
        enabled: true
    }
}
 
define view I_REIntegObjSpaceGroupType as
 select from tivipiosgtype
  association [0..*] to I_REIntegObjSpaceGroupTypeText as _Text on $projection.REIntegObjSpaceGroupType = _Text.REIntegObjSpaceGroupType
  association [0..1] to I_REIntegObjectCategory as _REIntegObjectCategory on $projection.REIntegObjectCategory = _REIntegObjectCategory.REIntegObjectCategory
  association [0..1] to I_RESpaceGroupDirection as _RESpaceGroupDirection on $projection.RESpaceGroupDirection = _RESpaceGroupDirection.RESpaceGroupDirection
  association [0..1] to I_REIntegObjectReference as _REIntegObjectReference on $projection.REIntegObjectReference = _REIntegObjectReference.REIntegObjectReference
{

    @ObjectModel.text.association: '_Text'
    key tivipiosgtype.iosgtype as REIntegObjSpaceGroupType,  
    iocategory as REIntegObjectCategory,
    iosgdirection as RESpaceGroupDirection,
    ioreference   as REIntegObjectReference,
    _Text,
    _REIntegObjectCategory,
    _RESpaceGroupDirection,
    _REIntegObjectReference
    
}
```
