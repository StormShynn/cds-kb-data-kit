---
name: I_ORGANIZATIONALCHANGETP
description: "Organizationalchangetp"
app_component: FI-GL-OC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-OC
  - interface-view
  - transactional-processing
  - component:FI-GL-OC-2CL
  - lob:Finance
---
# I_ORGANIZATIONALCHANGETP

**Organizationalchangetp**

| Property | Value |
|---|---|
| App Component | `FI-GL-OC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrganizationalChange` | ✓ | |  |  |  |  |
| `OrganizationalChangeForEdit` |  | |  |  |  |  |
| `OrganizationalChangeActivity` |  | |  |  |  |  |
| `OrglChangeEffectiveDate` |  | |  |  |  |  |
| `OrglChangeProcessingStatus` |  | |  |  |  |  |
| `OrglChangeApplicationVersion` |  | |  |  |  |  |
| `OrglChangeLastChangeDateTime` |  | |  |  |  |  |
| `OrglChangeLastChangedByUser` |  | |  |  |  |  |
| `OrglChangeCreationDateTime` |  | |  |  |  |  |
| `OrglChangeCreatedByUser` |  | |  |  |  |  |
| `_WBSElement` | | ✓ | | | | |
| `_OrglChangeText` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_NetworkActivity` | | ✓ | | | | |
| `_CoCodeSelection` | | ✓ | | | | |
| `_PrftCtrSelection` | | ✓ | | | | |
| `_UserCrtedContactCard` | | ✓ | | | | |
| `_UserLastChgdContactCard` | | ✓ | | | | |
| `_SitnInstceIndicator` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label:                      'Organizational Change - TP'
@AccessControl.authorizationCheck:        #MANDATORY // old #check ATC

@VDM.viewType:                            #TRANSACTIONAL // old #CONSUMPTION wg. ATC
@VDM.usage.type:                          [#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type:            #PUBLIC_LOCAL_API //from I_Salesorder

@ObjectModel.representativeKey:          'OrganizationalChange'

@Metadata.ignorePropagatedAnnotations:    true

@AccessControl.personalData.blocking:     #REQUIRED
@AccessControl.privilegedAssociations:    ['_UserCrtedContactCard', '_UserLastChgdContactCard']

@ObjectModel.usageType.sizeCategory:      #L
@ObjectModel.usageType.serviceQuality:    #C
@ObjectModel.usageType.dataClass:         #MIXED
@ObjectModel.supportedCapabilities:       [#TRANSACTIONAL_PROVIDER] //[ #SITUATION_ANCHOR, #SITUATION_TRIGGER, #SITUATION_DATACONTEXT ]
@ObjectModel.semanticKey:                 ['OrganizationalChange']
@ObjectModel.uniqueIdField:               'OrganizationalChange'
@ObjectModel.modelingPattern:             #TRANSACTIONAL_INTERFACE
@ObjectModel.sapObjectNodeType.name:      'OrganizationalChange' // ATC FS4RAP 104 in Beh def.

@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: ['_OrglChange'],
  elementSuffix: 'OCH', 
  quota: {
    maximumFields: 408, //This is calculated with formula - 2* <Customer Percentage from SCFD_REGISTRY> * <max number of fields in SCFD_REGISTRY>
    maximumBytes: 8160  //due to mail
  }  
} 
//--------------------------------------------------------------------



define root view entity I_OrganizationalChangeTP
  provider contract transactional_interface
  as projection on R_OrganizationalChangeTP as _OrglChange

{


  key OrganizationalChange,
      
      @ObjectModel.editableFieldFor: 'OrganizationalChange'
      OrganizationalChangeForEdit,
      
      OrganizationalChangeActivity,

      OrglChangeEffectiveDate,

      OrglChangeProcessingStatus,

      OrglChangeApplicationVersion,

      OrglChangeLastChangeDateTime,

      OrglChangeLastChangedByUser,

      OrglChangeCreationDateTime,

      OrglChangeCreatedByUser,
      
      _WBSElement       : redirected to composition child I_OrglChangeWBSElementTP,
      _OrglChangeText   : redirected to composition child I_OrganizationalChangeTextTP,

      _Project          : redirected to composition child I_OrglChangeProjectTP,
      _Product          : redirected to composition child I_OrglChangeProductTP,
      @API.element.releaseState: #DEPRECATED
      _MasterFixedAsset : redirected to composition child I_OrglChangeFixedAssetTP,
      _Order            : redirected to composition child I_OrganizationalChangeOrderTP,
      @API.element.releaseState: #DEPRECATED
      _NetworkActivity  : redirected to composition child I_OrglChangeNetworkActivityTP,

      _CoCodeSelection  : redirected to composition child I_OrglChangeCoCodeSelectionTP,
      _PrftCtrSelection : redirected to composition child I_OrglChangePrftCtrSelectionTP,

      _UserCrtedContactCard,
      _UserLastChgdContactCard,
      _SitnInstceIndicator


}
```
