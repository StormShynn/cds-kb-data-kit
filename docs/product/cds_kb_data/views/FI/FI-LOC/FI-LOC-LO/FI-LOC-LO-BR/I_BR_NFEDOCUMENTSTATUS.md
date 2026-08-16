---
name: I_BR_NFEDOCUMENTSTATUS
description: "BR Nfedocumentstatus"
semantic_vi: "View I_BR_NFEDOCUMENTSTATUS hiển thị trạng thái của các tài liệu NFe Brazil, cung cấp thông tin về trạng thái hiện tại của các tài liệu này."
keywords:
  - "nfe document"
  - "tài liệu nfe"
  - "status"
  - "trạng thái"
  - "document status"
  - "tình trạng tài liệu"
  - "sap fi"
  - "fi sap"
  - "br nfe document status"
  - "tình trạng tài liệu nfe brazil"
  - "nfe brazil"
  - "tài liệu nfe brazil"
semantic_en: "The I_BR_NFEDOCUMENTSTATUS view exposes the status of Brazilian NFe documents, providing information on the current state of these documents."
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
  - document
  - status
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFEDOCUMENTSTATUS

**BR Nfedocumentstatus**

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
| `BR_NFeDocumentStatus` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as logbr_nfedocstatus preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFeDocumentStatusText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil NFe Document Status'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFEDOCSTATUS'
@ObjectModel.representativeKey: 'BR_NFeDocumentStatus'
@ObjectModel.compositionRoot: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@AbapCatalog.preserveKey:true 

define view I_BR_NFeDocumentStatus
  as select from dd07l
  association [0..*] to I_BR_NFeDocumentStatusText as _Text on $projection.BR_NFeDocumentStatus = _Text.BR_NFeDocumentStatus
{
  @ObjectModel.text.association: '_Text'
  key cast( substring( domvalue_l, 1, 1 ) as logbr_nfedocstatus preserving type ) as BR_NFeDocumentStatus,
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
   _Text
}
where domname  = 'J_1BNFEDOCSTATUS'
  and as4local = 'A'
```
