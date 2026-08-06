---
name: I_SALESORDERTEXTTP
description: Sales OrderTEXTTP
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
  - component:SD-SLS-API-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERTEXTTP

**Sales OrderTEXTTP**

| Property | Value |
|---|---|
| App Component | `SD-SLS-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesOrder` | `SalesOrderText.SalesOrder` |
| key `Language` | `SalesOrderText.Language` |
| key `LongTextID` | `SalesOrderText.LongTextID` |
| `LongTextIDForEdit` | `SalesOrderText.LongTextIDForEdit` |
| `LanguageForEdit` | `SalesOrderText.LanguageForEdit` |
| `LongText` | `SalesOrderText.LongText` |
| `SalesOrderType` | `SalesOrderText.SalesOrderType` |
| `SalesOrganization` | `SalesOrderText.SalesOrganization` |
| `DistributionChannel` | `SalesOrderText.DistributionChannel` |
| `OrganizationDivision` | `SalesOrderText.OrganizationDivision` |
| `_SalesOrder` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Sales Order - Text TP'

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
   semanticKey: ['SalesOrder', 'Language', 'LongTextID'],
   dataCategory: #TEXT
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SalesOrderTextTP 
  as projection on R_SalesOrderTextTP as SalesOrderText 
{
  key SalesOrderText.SalesOrder,
  @Semantics.language:true  
  key SalesOrderText.Language,
  key SalesOrderText.LongTextID, 
  
  @ObjectModel.editableFieldFor: 'LongTextID'
  SalesOrderText.LongTextIDForEdit,    
  @Semantics.language:true  
  @ObjectModel.editableFieldFor: 'Language'
  SalesOrderText.LanguageForEdit, 
  @Semantics.text:true
  SalesOrderText.LongText,       

  //    DCL
  @Consumption.hidden: true
  SalesOrderText.SalesOrderType,
  @Consumption.hidden: true
  SalesOrderText.SalesOrganization,
  @Consumption.hidden: true
  SalesOrderText.DistributionChannel,
  @Consumption.hidden: true
  SalesOrderText.OrganizationDivision,
  
  //Composition
  _SalesOrder : redirected to parent I_SalesOrderTP     
}
```
