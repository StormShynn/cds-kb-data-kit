---
name: I_ACCOUNTASSIGNMENTCATEGORY
description: "Accountassignmentcategory"
semantic_vi: "View AccountAssignmentCategory cung cấp thông tin về các loại phân bổ tài khoản, được sử dụng trong quản lý vật tư để theo dõi và quản lý các giao dịch tài chính liên quan đến kho hàng và mua sắm."
keywords:
  - "account assignment"
  - "account assignment category"
  - "material management"
  - "inventory management"
  - "procurement"
  - "financial transaction"
  - "sourcing & procurement"
  - "mm"
  - "ekko"
  - "đơn mua hàng"
  - "phân bổ tài khoản"
semantic_en: "The AccountAssignmentCategory view provides information about categories of account assignments, which are used in material management to track and manage financial transactions related to inventory and procurement."
app_component: MM
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
  - interface-view
  - component:MM
  - lob:Sourcing & Procurement
---
# I_ACCOUNTASSIGNMENTCATEGORY

**Accountassignmentcategory**

| Property | Value |
|---|---|
| App Component | `MM` |
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
| `AccountAssignmentCategory` | ✓ | |  | `knttp` |  |  |
| `ConsumptionPosting` |  | |  | `kzvbr` |  |  |
| `InventorySpecialStockType` |  | |  | `sobkz` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'AccountAssignmentCategory'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.sapObjectNodeType.name:'AccountAssignmentCategory'
@AbapCatalog.sqlViewName: 'IMMACCTASSGMTCAT'
@EndUserText.label: 'Account Assignment Category'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.supportedCapabilities:[
#CDS_MODELING_ASSOCIATION_TARGET, 
#SQL_DATA_SOURCE, 
#CDS_MODELING_DATA_SOURCE] 


 
define root view I_AccountAssignmentCategory
as select from t163k
   composition [0..*] of I_AcctAssignmentCategoryText as _Text 
// on $projection.AccountAssignmentCategory = _Text.AccountAssignmentCategory
{

                @Search.defaultSearchElement: true
                @ObjectModel.text.association: '_Text'
                key t163k.knttp as AccountAssignmentCategory,                
                    t163k.kzvbr as ConsumptionPosting,
                    t163k.sobkz as InventorySpecialStockType,
                 _Text           
}
```
