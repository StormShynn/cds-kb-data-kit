---
name: I_SALESORDERITEMTEXTTP
description: Sales OrderITEMTEXTTP
app_component: SD-SLS-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-API
  - interface-view
  - transactional-processing
  - sales-order
  - text
  - item-level
  - component:SD-SLS-API-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERITEMTEXTTP

**Sales OrderITEMTEXTTP**

| Property | Value |
|---|---|
| App Component | `SD-SLS-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesOrder` | `SalesOrderItemText.SalesOrder` |
| key `SalesOrderItem` | `SalesOrderItemText.SalesOrderItem` |
| key `Language` | `SalesOrderItemText.Language` |
| key `LongTextID` | `SalesOrderItemText.LongTextID` |
| `LongTextIDForEdit` | `SalesOrderItemText.LongTextIDForEdit` |
| `LanguageForEdit` | `SalesOrderItemText.LanguageForEdit` |
| `LongText` | `SalesOrderItemText.LongText` |
| `SalesOrderType` | `SalesOrderItemText.SalesOrderType` |
| `SalesOrganization` | `SalesOrderItemText.SalesOrganization` |
| `DistributionChannel` | `SalesOrderItemText.DistributionChannel` |
| `OrganizationDivision` | `SalesOrderItemText.OrganizationDivision` |
| `_Item` | *Association* |
| `_SalesOrder` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Sales Order Item - Text TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesOrder', 'SalesOrderItem', 'Language', 'LongTextID'],
   dataCategory: #TEXT
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SalesOrderItemTextTP
  as projection on R_SalesOrderItemTextTP as SalesOrderItemText 
{
  key SalesOrderItemText.SalesOrder,
  key SalesOrderItemText.SalesOrderItem,
  @Semantics.language:true    
  key SalesOrderItemText.Language,
  key SalesOrderItemText.LongTextID, 
  
  @ObjectModel.editableFieldFor: 'LongTextID'
  SalesOrderItemText.LongTextIDForEdit,    
  @Semantics.language:true  
  @ObjectModel.editableFieldFor: 'Language'
  SalesOrderItemText.LanguageForEdit,        
  @Semantics.text:true
  SalesOrderItemText.LongText,
  
  //    DCL
  @Consumption.hidden: true
  SalesOrderItemText.SalesOrderType,
  @Consumption.hidden: true
  SalesOrderItemText.SalesOrganization,
  @Consumption.hidden: true
  SalesOrderItemText.DistributionChannel,
  @Consumption.hidden: true
  SalesOrderItemText.OrganizationDivision,
 
  //Composition
  _Item       : redirected to parent I_SalesOrderItemTP,
  _SalesOrder : redirected to I_SalesOrderTP
      
}
```
