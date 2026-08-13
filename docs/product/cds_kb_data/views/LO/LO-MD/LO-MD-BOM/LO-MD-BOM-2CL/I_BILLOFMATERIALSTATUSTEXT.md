---
name: I_BILLOFMATERIALSTATUSTEXT
description: "Bill of MaterialSTATUSTEXT"
semantic_vi: "View I_BILLOFMATERIALSTATUSTEXT cung cấp mô tả văn bản cho trạng thái vật liệu của đơn hàng vật liệu, có thể được sử dụng để hiển thị thông tin trạng thái trong ứng dụng."
keywords:
  - "bill of material"
  - "trạng thái vật liệu"
  - "mô tả văn bản"
  - "sap"
  - "cds view"
  - "logistics general"
  - "material"
  - "language"
  - "status text"
semantic_en: "The I_BILLOFMATERIALSTATUSTEXT view provides text descriptions for bill of material statuses, which can be used to display status information in applications."
app_component: LO-MD-BOM-2CL
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
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - text-view
  - material
  - bill-of-material
  - text
  - status
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_BILLOFMATERIALSTATUSTEXT

**Bill of MaterialSTATUSTEXT**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
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
| `Language` | ✓ | |  | `spras` |  |  |
| `BillOfMaterialStatus` | ✓ | |  | `stlst` |  |  |
| `BillOfMaterialStatusText` |  | |  | `sttxt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBOMSTATUSTEXT'
@ObjectModel.dataCategory: #TEXT
@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'BillOfMaterialStatus'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.viewType: #BASIC 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Bill Of Material Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE,
                                       #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'BillOfMaterialStatusText' 
define view I_BillOfMaterialStatusText as select from t415t 


  association[0..1] to I_Language as _Language 
    on $projection.Language = _Language.Language
    {
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    _Language,
    key stlst as BillOfMaterialStatus,
    @Semantics.text: true
    @EndUserText.label:'Description of BOM Status' 
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    @Search.fuzzinessThreshold: 0.8
    sttxt as BillOfMaterialStatusText
    
}
```
