---
name: I_CNSLDTNTSKDOCTYPEDTACOLL
description: "Cnsldtntskdoctypedtacoll"
app_component: FIN-CS-COR-MON-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - interface-view
  - component:FIN-CS-COR-MON-2CL
  - lob:Other
---
# I_CNSLDTNTSKDOCTYPEDTACOLL

**Cnsldtntskdoctypedtacoll**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationTask` | ✓ | |  | `cast( ConsolidationTask as fincs_tsk preserving type )` |  |  |
| `ConsolidationVersion` | ✓ | |  | `cast( ConsolidationVersion as fincs_consolidationversion preserving type )` |  |  |
| `CnsldtnDocTypeValdFrmFsclYear` | ✓ | |  | `cast( CnsldtnDocTypeValdFrmFsclYear as fincs_doctype_fromyear preserving type )` |  |  |
| `CnsldtnDocTypeValdFrmFsclPerd` | ✓ | |  | `cast( CnsldtnDocTypeValdFrmFsclPerd as fincs_doctype_fromperiod preserving type )` |  |  |
| `CnsldtnDocTypeSequenceValue` | ✓ | |  | `cast( CnsldtnDocTypeSequenceValue as fincs_doctype_sequence preserving type )` |  |  |
| `ConsolidationDocumentType` |  | |  | `cast( ConsolidationDocumentType as fincs_documenttype preserving type )` |  |  |
| `_CnsldtnTask` | | ✓ | | | | |
| `_CnsldtnVersion` | | ✓ | | | | |
| `_CnsldtnDocumentType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnTask` | `I_CnsldtnTask` | [1..1] |
| `_CnsldtnVersion` | `I_CnsldtnVersion` | [1..1] |
| `_CnsldtnDocumentType` | `I_CnsldtnDocumentType_2` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSTSKDOCDCASGN',
  compiler.compareFilter: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S},
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE 
                          ],
  sapObjectNodeType.name: 'CnsldtnTskDocTypeDtaCollection'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn DC Task Document Type Assignment'
define view I_CnsldtnTskDocTypeDtaColl as 
  select from P_CnsldtnTskDocTypeDtaColl
    
    association [1..1] to I_CnsldtnTask             as _CnsldtnTask               on $projection.ConsolidationTask = _CnsldtnTask.ConsolidationTask
    association [1..1] to I_CnsldtnVersion          as _CnsldtnVersion            on $projection.ConsolidationVersion = _CnsldtnVersion.ConsolidationVersion
    association [1..1] to I_CnsldtnDocumentType_2   as _CnsldtnDocumentType       on $projection.ConsolidationDocumentType = _CnsldtnDocumentType.ConsolidationDocumentType
{
      @ObjectModel.foreignKey.association: '_CnsldtnTask'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationTask'
  key cast( ConsolidationTask as fincs_tsk preserving type )                             as ConsolidationTask,
      
      @ObjectModel.foreignKey.association: '_CnsldtnVersion'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationVersion'
      @Consumption.valueHelpDefinition: [{ entity:{
           name: 'I_CnsldtnVersionVH',
           element: 'ConsolidationVersion' } }]
  key cast( ConsolidationVersion as fincs_consolidationversion preserving type )         as ConsolidationVersion,
      
      @Semantics.fiscal.year: true
  key cast( CnsldtnDocTypeValdFrmFsclYear as fincs_doctype_fromyear preserving type )    as CnsldtnDocTypeValdFrmFsclYear,
      
      @Semantics.fiscal.period: true
  key cast( CnsldtnDocTypeValdFrmFsclPerd as fincs_doctype_fromperiod preserving type )  as CnsldtnDocTypeValdFrmFsclPerd,
  
  key cast( CnsldtnDocTypeSequenceValue as fincs_doctype_sequence preserving type )      as CnsldtnDocTypeSequenceValue,
      
      @ObjectModel.foreignKey.association: '_CnsldtnDocumentType'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationDocumentType'
      cast( ConsolidationDocumentType as fincs_documenttype preserving type )            as ConsolidationDocumentType,
      
      _CnsldtnTask,
      _CnsldtnVersion,
      _CnsldtnDocumentType     
}
```
