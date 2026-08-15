---
name: I_BR_BILLOFLADINGTYPE
description: "BR Billofladingtype"
semantic_vi: "View I_BR_BILLOFLADINGTYPE hiển thị các loại vận đơn sử dụng trong logistics và tài chính, cung cấp tham chiếu cho việc chọn loại vận đơn phù hợp khi tạo vận đơn."
keywords:
  - "bill of lading"
  - "loại vận đơn"
  - "logistics"
  - "finance"
  - "fi"
  - "fi-loc"
  - "fi-loc-lo-br"
  - "interface-view"
  - "component:fi-loc-lo-br"
  - "lob:finance"
semantic_en: "The I_BR_BILLOFLADINGTYPE view exposes bill of lading types used in logistics and finance, providing a reference for selecting the correct type when creating bills of lading."
app_component: FI-LOC-LO-BR
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
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_BILLOFLADINGTYPE

**BR Billofladingtype**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
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
| `BR_BillOfLadingType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as logbr_bill_lading_type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_BillOfLadingTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRBILLLADTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Brazil Domain for Bill Of Lading Type'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BR_BillOfLadingType'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.compositionRoot:true
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BR_BillOfLadingType
as select from dd07l
  
  association [0..*] to I_BR_BillOfLadingTypeText as _Text on $projection.BR_BillOfLadingType = _Text.BR_BillOfLadingType                    
  
{
  @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 2 ) as logbr_bill_lading_type ) as BR_BillOfLadingType,
  
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname = 'LOGBR_BILL_LADING_TYPE' 
  and as4local = 'A'
```
