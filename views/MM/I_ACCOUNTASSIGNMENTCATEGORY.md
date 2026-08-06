---
name: I_ACCOUNTASSIGNMENTCATEGORY
description: Accountassignmentcategory
app_component: MM
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `AccountAssignmentCategory` | `t163k.knttp` |
| `ConsumptionPosting` | `t163k.kzvbr` |
| `InventorySpecialStockType` | `t163k.sobkz` |
| `_Text` | *Association* |

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
