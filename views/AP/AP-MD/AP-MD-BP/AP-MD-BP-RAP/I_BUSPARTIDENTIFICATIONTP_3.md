---
name: I_BUSPARTIDENTIFICATIONTP_3
description: Business PartnerIDENTIFICATIONTP 3
app_component: AP-MD-BP-RAP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - transactional-processing
  - business-partner
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTIDENTIFICATIONTP_3

**Business PartnerIDENTIFICATIONTP 3**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessPartner` | `BusinessPartner` |
| key `BPIdentificationType` | `BPIdentificationType` |
| key `BPIdentificationNumber` | `BPIdentificationNumber` |
| `BPIdnNmbrIssuingInstitute` | `BPIdnNmbrIssuingInstitute` |
| `BPIdentificationEntryDate` | `BPIdentificationEntryDate` |
| `Country` | `Country` |
| `Region` | `Region` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `AuthorizationGroup` | `AuthorizationGroup` |
| `BusinessPartnerCategory` | `BusinessPartnerCategory` |
| `BPIdnTypeForEditValue` | `BPIdnTypeForEditValue` |
| `BPIdnNumberForEditValue` | `BPIdnNumberForEditValue` |
| `DataControllerSet` | `DataControllerSet` |
| `DataController1` | `DataController1` |
| `DataController2` | `DataController2` |
| `DataController3` | `DataController3` |
| `DataController4` | `DataController4` |
| `DataController5` | `DataController5` |
| `DataController6` | `DataController6` |
| `DataController7` | `DataController7` |
| `DataController8` | `DataController8` |
| `DataController9` | `DataController9` |
| `DataController10` | `DataController10` |
| `_BuPaIdentificationType` | *Association* |
| `_BusinessPartnerCategory` | *Association* |
| `_BusinessPartner` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Business Partner Identification'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    usageType.serviceQuality: #D,
    usageType.sizeCategory : #XXL,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE 
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_BusPartIdentificationTP_3  
as projection on I_BusPartIdentificationTP_2
{
      @Search.defaultSearchElement: true
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key BusinessPartner,
      @ObjectModel.foreignKey.association: '_BuPaIdentificationType'
  key BPIdentificationType,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key BPIdentificationNumber,
      BPIdnNmbrIssuingInstitute,
      BPIdentificationEntryDate,
      Country,
      Region,
      ValidityStartDate,
      ValidityEndDate,
      AuthorizationGroup,
      @ObjectModel.foreignKey.association: '_BusinessPartnerCategory'
      BusinessPartnerCategory,
      @ObjectModel.editableFieldFor: 'BPIdentificationType'
      @ObjectModel.foreignKey.association: '_BuPaIdentificationType'
      BPIdnTypeForEditValue,
      @ObjectModel.editableFieldFor: 'BPIdentificationNumber'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      BPIdnNumberForEditValue,
      
      ////////////// Start of Datacontroller 10+1 fields -  Not to be consumed by any other views//////////
          @UI.hidden:true
          @Consumption.hidden:true
          DataControllerSet,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController1,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController2,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController3,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController4,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController5,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController6,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController7,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController8,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController9,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController10,

          ////////////// End of Datacontroller 10+1 fields//////////
      
      _BuPaIdentificationType,
      _BusinessPartnerCategory,
      
      _BusinessPartner : redirected to parent I_BusinessPartnerTP_3
//      _BPDataControllerUsage

}
```
