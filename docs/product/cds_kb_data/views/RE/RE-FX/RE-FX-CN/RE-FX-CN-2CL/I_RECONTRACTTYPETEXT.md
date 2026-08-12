---
name: I_RECONTRACTTYPETEXT
description: "Real Estate Contract Type - Text"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTTYPETEXT')/$value
semantic_en: "Real Estate Contract Type - Text"
semantic_vi: "Real Estate Contract Type - Text — CDS view giao diện dựa trên tiv2f."
keywords:
  - "real"
  - "estate"
  - "contract"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - RE
  - component:RE-FX-CN-2CL
  - contract
  - interface-view
  - RE-FX
  - RE-FX-CN
  - RE-FX-CN-2CL
---
# I_RECONTRACTTYPETEXT

**Real Estate Contract Type - Text**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REContractType` | ✓ | |  | `smvart` | `CHAR(4)` | External Real Estate Contract Type |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `REContractTypeName` |  | |  | `cast( xmbez as recnvdmcnttypetxt preserving type )` | `CHAR(30)` | Contract Type Name |
| `_REContractType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REContractType` | `I_REContractType` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTTYPETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IRECONTYPET'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Contract Type - Text'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: ['REContractType'] 
@ObjectModel.semanticKey: ['REContractType']
//@ClientDependent: true
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT, 
                                        #SQL_DATA_SOURCE, 
                                        #CDS_MODELING_DATA_SOURCE, 
                                        #EXTRACTION_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET ]
@Analytics:{
    dataExtraction: {
        enabled: true
    }
}

// Double Maintenance with I_REContractTypeText_2 required

define view I_REContractTypeText as select from tiv2f 
association [1..1] to I_REContractType as _REContractType on $projection.REContractType = _REContractType.REContractType
association [1..1] to I_Language              as _Language              on $projection.Language = _Language.Language{
    @ObjectModel.foreignKey.association: '_REContractType'
    @ObjectModel.text.element: ['REContractTypeName']
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    key smvart                                                                                                as REContractType,
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key spras                                                                                                 as Language,
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    cast( xmbez as recnvdmcnttypetxt preserving type )                                                        as REContractTypeName,
    
    @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
    _REContractType,
    _Language
}
```
