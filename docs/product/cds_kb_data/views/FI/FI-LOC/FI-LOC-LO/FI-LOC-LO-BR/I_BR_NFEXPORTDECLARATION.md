---
name: I_BR_NFEXPORTDECLARATION
description: "BR Nfexportdeclaration"
semantic_vi: "View BR Nfexportdeclaration hiển thị thông tin về các khai báo xuất khẩu liên quan đến các hóa đơn vận chuyển và ngày hạn thanh toán."
keywords:
  - "export declaration"
  - "khai báo xuất khẩu"
  - "bill of lading"
  - "hóa đơn vận chuyển"
  - "due date"
  - "ngày hạn thanh toán"
  - "sap fi"
  - "fi-loc-lo-br"
semantic_en: "The BR Nfexportdeclaration view exposes information about export declarations related to bills of lading and due dates. It is used to retrieve data for export declaration purposes."
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
# I_BR_NFEXPORTDECLARATION

**BR Nfexportdeclaration**

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
| `BR_NotaFiscal` | ✓ | |  | `docnum` |  |  |
| `BR_DUE` |  | |  | `due_number` |  |  |
| `BR_DUEIssuedDate` |  | |  | `due_issued_date` |  |  |
| `BR_DUEType` |  | |  | `due_type` |  |  |
| `BR_BillOfLading` |  | |  | `bill_lading_number` |  |  |
| `BR_BillOfLadingDate` |  | |  | `bill_lading_date` |  |  |
| `BR_BillOfLadingType` |  | |  | `bill_lading_type` |  |  |
| `BR_DUEExportConfirmationDate` |  | |  | `export_confirmation_date` |  |  |
| `_BR_DUEType` | | ✓ | | | | |
| `_BR_BillOfLadingType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_DUEType` | `I_BR_DUEType` | [0..1] |
| `_BR_BillOfLadingType` | `I_BR_BillOfLadingType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFDUE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Brazil Export Declaration Data for NF'
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_BR_NFExportDeclaration as select from logbr_nf_due 
  
  association [0..1] to I_BR_DUEType          as _BR_DUEType          on _BR_DUEType.BR_DUEType = $projection.BR_DUEType
  association [0..1] to I_BR_BillOfLadingType as _BR_BillOfLadingType on _BR_BillOfLadingType.BR_BillOfLadingType = $projection.BR_BillOfLadingType
  
{
  
  key docnum                                                    as BR_NotaFiscal,
  due_number                                                    as BR_DUE, 
  due_issued_date                                               as BR_DUEIssuedDate,
  @ObjectModel.foreignKey.association: '_BR_DUEType'
  due_type                                                      as BR_DUEType,
  bill_lading_number                                            as BR_BillOfLading,
  bill_lading_date                                              as BR_BillOfLadingDate,
  @ObjectModel.foreignKey.association: '_BR_BillOfLadingType'
  bill_lading_type                                              as BR_BillOfLadingType,
  export_confirmation_date                                      as BR_DUEExportConfirmationDate,
  
  _BR_DUEType,
  _BR_BillOfLadingType
  
}
```
