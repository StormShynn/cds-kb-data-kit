---
name: I_CUSTOMERRETURNITEMTEXTTP
description: Customerreturnitemtexttp
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-RE
  - interface-view
  - transactional-processing
  - customer
  - text
  - item-level
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_CUSTOMERRETURNITEMTEXTTP

**Customerreturnitemtexttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerReturn` | ✓ | |  |  |  |  |
| `CustomerReturnItem` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `LongTextID` | ✓ | |  |  |  |  |
| `LongTextIDForEdit` |  | |  |  |  |  |
| `LanguageForEdit` |  | |  |  |  |  |
| `LongText` |  | |  |  |  |  |
| `CustomerReturnType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_CustomerReturn` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Returns Order Item - Text TP'

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
   semanticKey: ['CustomerReturn', 'CustomerReturnItem', 'Language', 'LongTextID'],
   dataCategory: #TEXT
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_CustomerReturnItemTextTP
  as projection on R_CustomerReturnItemTextTP as CustomerReturnItemText 
{
  key CustomerReturnItemText.CustomerReturn,
  key CustomerReturnItemText.CustomerReturnItem,
  @Semantics.language:true    
  key CustomerReturnItemText.Language,
  key CustomerReturnItemText.LongTextID, 
  
  @ObjectModel.editableFieldFor: 'LongTextID'
  CustomerReturnItemText.LongTextIDForEdit,    
  @Semantics.language:true  
  @ObjectModel.editableFieldFor: 'Language'
  CustomerReturnItemText.LanguageForEdit,        
  @Semantics.text:true
  CustomerReturnItemText.LongText,
  
  //    DCL
  @Consumption.hidden: true
  CustomerReturnItemText.CustomerReturnType,
  @Consumption.hidden: true
  CustomerReturnItemText.SalesOrganization,
  @Consumption.hidden: true
  CustomerReturnItemText.DistributionChannel,
  @Consumption.hidden: true
  CustomerReturnItemText.OrganizationDivision,
 
  //Composition
  _Item       : redirected to parent I_CustomerReturnItemTP,
  _CustomerReturn : redirected to I_CustomerReturnTP
      
}
```
