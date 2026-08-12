---
name: I_CNDNCONTRPROCVARTYPEASSGMT
description: "This CDS view provides the prerequisites for answering questions about the assignment of condition contract types to a process variant."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARTYPEASSGMT')/$value
semantic_en: "This CDS view provides the prerequisites for answering questions about the assignment of condition contract types to a process variant."
semantic_vi: "Process Variant Contract Type Assgmt — CDS view cơ bản dựa trên wcb_c_proc_var_c."
keywords:
  - "process"
  - "variant"
  - "contract"
  - "type"
  - "assgmt"
  - "cndn"
  - "contr"
  - "proc"
tags:
  - LO
  - bo:plant
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRPROCVARTYPEASSGMT

**This CDS view provides the prerequisites for answering questions about the assignment of condition contract types to a process variant.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARTYPEASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrProcVar` | ✓ | |  | `process_variant` | `CHAR(4)` | Condition Contract Process Variant |
| `CndnContrType` | ✓ | |  | `contract_type` | `CHAR(4)` | Condition Contract Type |
| `_CndnContrProcVar` | | ✓ | | | | |
| `_CndnContrType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CndnContrProcVar` | `I_CndnContrProcVar` | [0..1] |
| `_CndnContrType` | `I_CndnContrType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARTYPEASSGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARTYPEASSGMT')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWCBPROCVARCTASG',
  compiler.compareFilter: true,
  buffering: {
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 001
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
   representativeKey: 'CndnContrProcVar',
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   }
}
@ClientHandling: {
     type: #INHERITED,
     algorithm: #SESSION_VARIABLE
}
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
}
@EndUserText.label: 'Process Variant Contract Type Assgmt'
@Metadata.ignorePropagatedAnnotations: true
define view I_CndnContrProcVarTypeAssgmt
  as select from wcb_c_proc_var_c
  association [0..1] to I_CndnContrProcVar as _CndnContrProcVar on $projection.CndnContrProcVar = _CndnContrProcVar.CndnContrProcVar
  association [0..1] to I_CndnContrType    as _CndnContrType    on $projection.CndnContrType = _CndnContrType.CndnContrType
{
  key process_variant       as CndnContrProcVar,
      @ObjectModel.foreignKey.association: '_CndnContrType'
      @Consumption: {
         valueHelpDefinition: [{ entity: { name: 'I_CndnContrTypeStdVH', element: 'CndnContrType' } }]
         }
  key contract_type         as CndnContrType,
  
      /*Associations*/
      _CndnContrProcVar,
      _CndnContrType
}
```
