---
name: I_ACCOUNTINGDOCUMENTTYPE
description: "Accounting DocumentUMENTTYPE"
semantic_vi: "View I_ACCOUNTINGDOCUMENTTYPE cung cấp thông tin về loại tài liệu kế toán, bao gồm đặc điểm và quyền cho phép ghi sổ của chúng. Nó được sử dụng để xác định đặc điểm của tài liệu kế toán trong mô-đun FI-GL."
keywords:
  - "accounting document"
  - "tài liệu kế toán"
  - "fi-gl"
  - "posting permission"
  - "đặc điểm tài liệu kế toán"
  - "hình thức tài liệu kế toán"
  - "loại tài liệu kế toán"
  - "accounting document type"
  - "đặc điểm ghi sổ"
semantic_en: "The I_ACCOUNTINGDOCUMENTTYPE CDS view provides information about accounting document types, including their characteristics and posting permissions. It is used to determine the properties of accounting documents in the FI-GL module."
app_component: FI-GL-IS-2CL
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
  - FI-GL
  - FI-GL-IS
  - interface-view
  - accounting-document
  - document
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_ACCOUNTINGDOCUMENTTYPE

**Accounting DocumentUMENTTYPE**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
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
| `AccountingDocumentType` | ✓ | |  | `cast ( blart as farp_blart preserving type )` |  |  |
| `AccountingDocumentNumberRange` |  | |  | `numkr` |  |  |
| `AuthorizationGroup` |  | |  | `brgru` |  |  |
| `ExchangeRateType` |  | |  | `kurst` |  |  |
| `AllowedFinancialAccountTypes` |  | |  | `koars` |  |  |
| `CustomerPostingIsAllowed` |  | |  | `cast( xkoad as fis_xkoad preserving type )` |  |  |
| `SupplierPostingIsAllowed` |  | |  | `cast( xkoak as fis_xkoak preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AccountingDocumentTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Journal Entry Type'
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@Metadata.allowExtensions:true
@AccessControl.authorizationCheck: #CHECK

@AbapCatalog.sqlViewName: 'IFIACCDOCTYPE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering:{
  status: #ACTIVE,
  type: #GENERIC,
  numberOfKeyFields: 1
}
@AbapCatalog.preserveKey:true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#EXTRACTION_DATA_SOURCE,#ANALYTICAL_DIMENSION]
@ObjectModel: {representativeKey: 'AccountingDocumentType', 
               usageType: {
                            dataClass: #CUSTOMIZING,
                            serviceQuality: #A,
                            sizeCategory: #S
                           }
              } 
define view I_AccountingDocumentType as select from t003

association [0..*] to I_AccountingDocumentTypeText as _Text on $projection.AccountingDocumentType = _Text.AccountingDocumentType

{
 
  @ObjectModel.text.association: '_Text'
  key cast ( blart as farp_blart preserving type ) as AccountingDocumentType,
  numkr as AccountingDocumentNumberRange,
  brgru as AuthorizationGroup,
  kurst as ExchangeRateType,
  koars as AllowedFinancialAccountTypes,
  cast( xkoad as fis_xkoad preserving type ) as CustomerPostingIsAllowed,
  cast( xkoak as fis_xkoak preserving type ) as SupplierPostingIsAllowed,
  _Text
};
```
