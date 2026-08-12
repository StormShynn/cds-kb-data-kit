---
name: I_PUBSECBDGTCNSMPNAMTTYPE
description: "Pubsecbdgtcnsmpnamttype"
app_component: PSM-FM-UP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - PSM-FM
  - PSM-FM-UP
  - interface-view
  - component:PSM-FM-UP
  - lob:Other
---
# I_PUBSECBDGTCNSMPNAMTTYPE

**Pubsecbdgtcnsmpnamttype**

| Property | Value |
|---|---|
| App Component | `PSM-FM-UP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PubSecBudgetCnsmpnAmtType` | ✓ | |  | `cast( cast ( substring( dd07l.domvalue_l, 1, 4 ) as abap.char( 4 ) ) as psm_bdgt_cnsmpn_amount_type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPSMS4CBDCNATY'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Budget Consumption Amount Type'

@VDM.viewType: #BASIC
@Analytics: {
     dataCategory: #DIMENSION,
     dataExtraction.enabled: true,
     internalName: #LOCAL
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #VALUE_HELP,
     sapObjectNodeType.name: 'PubSecBudgetCnsmpnAmtType',     
     representativeKey: 'PubSecBudgetCnsmpnAmtType',
     usageType: {
         dataClass: #META,
         serviceQuality: #A,
         sizeCategory: #S
     },
     resultSet.sizeCategory: #XS,
     supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
}
@Metadata.ignorePropagatedAnnotations: true 
@Search.searchable: true

define root view I_PubSecBdgtCnsmpnAmtType 
  as select from dd07l
  composition [0..*] of I_PubSecBdgtCnsmpnAmtTypeText as _Text 
{
      @ObjectModel.text.association: '_Text'
  key cast( cast ( substring( dd07l.domvalue_l, 1, 4 ) as abap.char( 4 ) ) as psm_bdgt_cnsmpn_amount_type ) as PubSecBudgetCnsmpnAmtType,
      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                                      as DomainValue,
      
      _Text
    
} where domname  = 'PSM_BDGT_CNSMPN_AMOUNT_TYPE'
    and domvalue_l <> ''
    and as4local = 'A'
```
