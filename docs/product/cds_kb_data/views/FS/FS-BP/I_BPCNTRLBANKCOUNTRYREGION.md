---
name: I_BPCNTRLBANKCOUNTRYREGION
description: "Bpcntrlbankcountryregion"
semantic_vi: "View Bpcntrlbankcountryregion cung cấp truy cập dữ liệu về quốc gia và vùng ngân hàng, rất cần thiết cho các tổ chức tài chính để quản lý hoạt động ngân hàng quốc tế. Nó có thể được sử dụng để truy xuất và phân tích thông tin về ngân hàng trung ương, quốc gia và vùng."
keywords:
  - "bank"
  - "country"
  - "region"
  - "central bank"
  - "financial institution"
  - "international banking"
  - "fs-bp"
  - "sap cds view"
  - "bpcentralbankcountryregion"
semantic_en: "The Bpcntrlbankcountryregion view provides access to bank country region data, which is essential for financial institutions to manage their international banking operations. It can be used to retrieve and analyze information about central banks, countries, and regions."
app_component: FS-BP
software_component: SAP_BASIS
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
  - FS
  - FS-BP
  - interface-view
  - bank
  - country
  - component:FS-BP
  - lob:Other
  - bo:Bank
---
# I_BPCNTRLBANKCOUNTRYREGION

**Bpcntrlbankcountryregion**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPCentralBankCountryRegion` | ✓ | |  | `country_key` |  |  |
| `_Text` | | ✓ | | | | |
| `_BPFinancialServicesReporting` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPCntrlBankCountryRegionText` | [0..*] |
| `_BPFinancialServicesReporting` | `I_BPFinancialServicesReporting` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCBCTRYREG',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'BPCentralBankCountryRegion',
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                sapObjectNodeType.name: 'DE_BPCntrlBkCountryRegionCode',           
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #VALUE_HELP_PROVIDER,
                                          #SEARCHABLE_ENTITY  ],
                modelingPattern: #ANALYTICAL_DIMENSION 
              }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL 
            }              
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@EndUserText.label: 'Central Bank Country Region'

define view I_BPCntrlBankCountryRegion
  as select from tplzb
  association [0..*] to I_BPCntrlBankCountryRegionText as _Text                         on $projection.BPCentralBankCountryRegion = _Text.BPCentralBankCountryRegion
  association [0..*] to I_BPFinancialServicesReporting as _BPFinancialServicesReporting on $projection.BPCentralBankCountryRegion = _BPFinancialServicesReporting.BPCentralBankCountryRegion
{     
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key tplzb.country_key as BPCentralBankCountryRegion,

      _Text,
      _BPFinancialServicesReporting
}
```
