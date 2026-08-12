---
name: I_REINTEGOBJCTRLGOBJTYPETEXT
description: "Real Estate Integ CO Object Type - Text"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJCTRLGOBJTYPETEXT')/$value
semantic_en: "Real Estate Integ CO Object Type - Text"
semantic_vi: "Real Estate Integ CO Object Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "real"
  - "estate"
  - "integ"
  - "object"
  - "type"
  - "text"
  - "language"
  - "ctrlg"
  - "domain"
  - "value"
  - "name"
tags:
  - RE
  - component:RE-FX-IP-2CL
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
---
# I_REINTEGOBJCTRLGOBJTYPETEXT

**Real Estate Integ CO Object Type - Text**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJCTRLGOBJTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `REIntegObjectCtrlgObjectType` | ✓ | |  | `cast(domvalue_l as reipobjectcoobjtype )` | `CHAR(1)` | Controlling Object Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `REIntegObjCtrlgObjTypeName` |  | |  | `cast( ddtext as recadesc60 preserving type )` | `CHAR(60)` | RE Description 60 Characters |
| `_Language` | | ✓ | | | | |
| `_REIntegObjCtrlgObjType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJCTRLGOBJTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJCTRLGOBJTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Real Estate Integ CO Object Type - Text'
@AbapCatalog.sqlViewName: 'IREINTOBJCOOBTYT'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:{
    dataExtraction: {
        enabled: true
    }
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'REIntegObjectCtrlgObjectType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY                   ]
@Search.searchable: true
//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
 
define view I_REIntegObjCtrlgObjTypeText as select from dd07t 
association to parent I_REIntegObjCtrlgObjType as _REIntegObjCtrlgObjType
    on $projection.REIntegObjectCtrlgObjectType = _REIntegObjCtrlgObjType.REIntegObjectCtrlgObjectType
association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language{
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,
    
    @ObjectModel.foreignKey.association: '_REIntegObjCtrlgObjType'
    @ObjectModel.text.element: ['REIntegObjectCtrlgObjectType']
    key cast(domvalue_l as reipobjectcoobjtype ) as REIntegObjectCtrlgObjectType,
        
    @Consumption.hidden: true
    domvalue_l as DomainValue,
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH
    @Semantics.text: true
    cast( ddtext as recadesc60 preserving type ) as REIntegObjCtrlgObjTypeName,
    _REIntegObjCtrlgObjType,   
    _Language
    
}
where
      domname  = 'REIPOBJECTCOOBJTYPE'
  and as4local = 'A'
  and as4vers  = '0000'
```
