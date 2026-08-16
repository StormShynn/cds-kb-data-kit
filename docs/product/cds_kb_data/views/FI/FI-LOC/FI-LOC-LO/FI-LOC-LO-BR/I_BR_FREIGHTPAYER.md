---
name: I_BR_FREIGHTPAYER
description: "BR Freightpayer"
semantic_vi: "View I_BR_FREIGHTPAYER hiển thị thông tin người trả tiền vận chuyển cho Brazil, có liên quan khi xử lý giao dịch vận chuyển trong thành phần FI-LOC-LO-BR."
keywords:
  - "freight payer"
  - "người trả tiền vận chuyển"
  - "fi-loc-lo-br"
  - "finance"
  - "sap"
  - "fi"
  - "fi-loc"
  - "fi-loc-lo"
  - "freight"
  - "vận chuyển"
  - "brazil"
semantic_en: "The I_BR_FREIGHTPAYER view exposes freight payer information for Brazil, which is relevant when processing freight-related transactions in the FI-LOC-LO-BR component."
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
  - freight
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_FREIGHTPAYER

**BR Freightpayer**

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
| `FreightPayer` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_freight_mode preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_FreightPayerText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Freight in Nota Fiscal'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRFREIGHTPAYER'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'FreightPayer'
@ObjectModel.compositionRoot: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_FreightPayer as select from dd07l
  association [0..*] to I_BR_FreightPayerText as _Text on $projection.FreightPayer = _Text.FreightPayer
{
  @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_freight_mode preserving type ) as FreightPayer,  
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname = 'J_1B_FREIGHT_MODE' and as4local = 'A'
```
