---
name: C_PURCHASINGORGANIZATIONDEX
description: "Purchasingorganizationdex"
semantic_vi: "View Purchasing Organization Dex cung cấp danh sách toàn diện các tổ chức mua hàng, bao gồm tên và mã công ty liên quan, có thể được sử dụng để phân tích và quản lý dữ liệu mua hàng."
keywords:
  - "purchasing organization"
  - "tổ chức mua hàng"
  - "company code"
  - "mã công ty"
  - "purchasing data"
  - "dữ liệu mua hàng"
  - "sap mm"
  - "mm-pur"
  - "mm-pur-ana"
  - "sourcing and procurement"
  - "sourcing & procurement"
  - "purchasing organization dex"
semantic_en: "The Purchasing Organization Dex view provides a comprehensive list of purchasing organizations, including their names and associated company codes, which can be used to analyze and manage purchasing data."
app_component: MM-PUR-ANA-2CL
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
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
  - bo:PurchasingOrganization
---
# C_PURCHASINGORGANIZATIONDEX

**Purchasingorganizationdex**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
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
| `PurchasingOrganization` | ✓ | |  |  |  |  |
| `PurchasingOrganizationName` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ObjectModel: {
                representativeKey: 'PurchasingOrganization',
                usageType.dataClass: #ORGANIZATIONAL,
                usageType.serviceQuality: #D,
                usageType.sizeCategory: #S,
                supportedCapabilities: #EXTRACTION_DATA_SOURCE
              }
@EndUserText.label: 'Purchasing Organization Data Extraction'
@VDM.viewType: #CONSUMPTION
@Analytics.internalName:#LOCAL

@Analytics: {
              dataCategory: #DIMENSION,
              dataExtraction.enabled: true
            }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'CMMPURORGDX'
@Metadata: {
              allowExtensions: true,
              ignorePropagatedAnnotations:true
           }
@ObjectModel.sapObjectNodeType.name: 'PurchasingOrganization'

define view C_PurchasingOrganizationDEX
  as select from I_PurchasingOrganization
{
      @ObjectModel.text.element : 'PurchasingOrganizationName'
  key PurchasingOrganization          as PurchasingOrganization,
      
      @Semantics.text: true
      PurchasingOrganizationName      as PurchasingOrganizationName,
      
      CompanyCode                     as CompanyCode
      
}
```
