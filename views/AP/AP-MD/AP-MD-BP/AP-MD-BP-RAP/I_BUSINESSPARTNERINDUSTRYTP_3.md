---
name: I_BUSINESSPARTNERINDUSTRYTP_3
description: "Business PartnerINDUSTRYTP 3"
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
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERINDUSTRYTP_3

**Business PartnerINDUSTRYTP 3**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  |  |  |
| `IndustrySystemType` | ✓ | |  |  |  |  |
| `IndustrySector` | ✓ | |  |  |  |  |
| `IsStandardIndustry` |  | |  |  |  |  |
| `IndustrySystemTypeForEdit` |  | |  |  |  |  |
| `IndSecTypeForEditValue` |  | |  |  |  |  |
| `DataControllerSet` |  | |  |  |  |  |
| `DataController1` |  | |  |  |  |  |
| `DataController2` |  | |  |  |  |  |
| `DataController3` |  | |  |  |  |  |
| `DataController4` |  | |  |  |  |  |
| `DataController5` |  | |  |  |  |  |
| `DataController6` |  | |  |  |  |  |
| `DataController7` |  | |  |  |  |  |
| `DataController8` |  | |  |  |  |  |
| `DataController9` |  | |  |  |  |  |
| `DataController10` |  | |  |  |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_BusPartIndustryKey` | | ✓ | | | | |
| `_BusPartIndustrySystem` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Business Partner Industry'
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

define view entity I_BusinessPartnerIndustryTP_3
  as projection on I_BusinessPartnerIndustryTP_2
{
      @Search.defaultSearchElement: true
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key BusinessPartner,
      @ObjectModel.foreignKey.association:'_BusPartIndustrySystem'
  key IndustrySystemType,
      @Search.defaultSearchElement: true
      @ObjectModel.foreignKey.association: '_BusPartIndustryKey'
  key IndustrySector,

      @Semantics.booleanIndicator: true
      IsStandardIndustry,
      @ObjectModel.editableFieldFor: 'IndustrySystemType'
      @ObjectModel.foreignKey.association:'_BusPartIndustrySystem'
      IndustrySystemTypeForEdit,
      @ObjectModel.editableFieldFor: 'IndustrySector'
      IndSecTypeForEditValue,
      
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

      /* Associations */
      _BusinessPartner : redirected to parent I_BusinessPartnerTP_3,
      _BusPartIndustryKey,
      _BusPartIndustrySystem
      //     _BPDataControllerUsage
}
```
