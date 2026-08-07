---
name: I_SERVICEDOCITEMTYPESLSSTTG
description: Service DocumentITEMTYPESLSSTTG
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - service
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCITEMTYPESLSSTTG

**Service DocumentITEMTYPESLSSTTG**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceDocItemCategory` | ✓ | |  | `itm_type` |
| `ItemIsBillingRelevant` |  | |  | `billing_relevant` |
| `SrvcDocItemCategoryIsQuotation` |  | |  | `case is_quotation when '0' then ' ' when '2' then 'X' when '3' then ' ' else ' ' end` |
| `SrvcDocQuotationItemIsCopied` |  | |  | `copy_quote` |
| `_ServiceDocItemCategory` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocItemCategory` | `I_ServiceDocItemCategory` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Sales Setting for Srvc Trans Item Cat'
@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog: {
  sqlViewName: 'ISERVDOCITMSLSTG',
  compiler.compareFilter: true ,
  preserveKey: true
}

@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   representativeKey: 'ServiceDocItemCategory',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #X,
     sizeCategory:   #S
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
}

@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true



define view I_ServiceDocItemTypeSlsSttg
  as select from crmc_sales_item
  association [1..1] to I_ServiceDocItemCategory as _ServiceDocItemCategory on $projection.ServiceDocItemCategory = _ServiceDocItemCategory.ServiceDocItemCategory
{

      @ObjectModel.foreignKey.association: '_ServiceDocItemCategory'
  key itm_type             as ServiceDocItemCategory,
      billing_relevant     as ItemIsBillingRelevant,
      @Semantics.booleanIndicator 
       case is_quotation
         when '0' then ' '
         when '2' then 'X'
         when '3' then ' '
                  else ' '
       end                  as SrvcDocItemCategoryIsQuotation,
       @Semantics.booleanIndicator 
       copy_quote           as SrvcDocQuotationItemIsCopied,      

      _ServiceDocItemCategory

}
```
