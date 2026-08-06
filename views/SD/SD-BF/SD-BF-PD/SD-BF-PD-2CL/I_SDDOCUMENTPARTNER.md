---
name: I_SDDOCUMENTPARTNER
description: Sddocumentpartner
app_component: SD-BF-PD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-PD
  - interface-view
  - document
  - partner
  - component:SD-BF-PD-2CL
  - lob:Sales & Distribution
---
# I_SDDOCUMENTPARTNER

**Sddocumentpartner**

| Property | Value |
|---|---|
| App Component | `SD-BF-PD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SDDocument` | `SDDocument` |
| key `PartnerFunction` | `PartnerFunction` |
| `Customer` | `Customer` |
| `Supplier` | `Supplier` |
| `Personnel` | `Personnel` |
| `ContactPerson` | `ContactPerson` |
| `ReferenceBusinessPartner` | `ReferenceBusinessPartner` |
| `AddressID` | `AddressID` |
| `AddressPersonID` | `AddressPersonID` |
| `AddressObjectType` | `AddressObjectType` |
| `SDDocPartnerAddressRefType` | `SDDocPartnerAddressRefType` |
| `BPAddrDeterminationTransaction` | `BPAddrDeterminationTransaction` |
| `BPRefAddressIDForDocSpcfcAddr` | `BPRefAddressIDForDocSpcfcAddr` |
| `PartnerIsOneTimeAccount` | `PartnerIsOneTimeAccount` |
| `SDDocPartnerAddrIsDocSpecific` | `SDDocPartnerAddrIsDocSpecific` |
| `VATRegistration` | `VATRegistration` |
| `UnloadingPointName` | `UnloadingPointName` |
| `CountryCode` | `CountryCode` |
| `CustomerHierarchyType` | `CustomerHierarchyType` |
| `CustIsPrcDetnRlvt` | `CustIsPrcDetnRlvt` |
| `CustomerIsRebateRelevant` | `CustomerIsRebateRelevant` |
| `CustomerHierarchyLevel` | `CustomerHierarchyLevel` |
| `CustomerHierarchyFixedLevel` | `CustomerHierarchyFixedLevel` |
| `TransportZone` | `TransportZone` |
| `_PartnerFunction` | *Association* |
| `_ContactPerson` | *Association* |
| `_WorkforcePersonMappings` | *Association* |
| `_Address` | *Association* |
| `_DfltAddrRprstn` | *Association* |
| `_BusinessPartnerAddress` | *Association* |
| `_PersonWorkplaceAddrDfltRprstn` | *Association* |
| `_BPRefAddressForDocSpcfcAddr` | *Association* |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'SD Document Partner'
@VDM.viewType: #BASIC
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #REQUIRED,
  privilegedAssociations: [ '_Address', '_DfltAddrRprstn', '_PersonWorkplaceAddrDfltRprstn' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDDOCPARTNER',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel: {
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #A,
    sizeCategory:   #XL
  }
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET  ]
define view I_SDDocumentPartner
as select from I_SDDocumentCompletePartners
{
 key SDDocument,
     @ObjectModel.foreignKey.association: '_PartnerFunction'
 key PartnerFunction,
    
     Customer,
     Supplier,
     Personnel,
     ContactPerson,
     
     ReferenceBusinessPartner,
     
     AddressID,
     AddressPersonID,
     AddressObjectType,
     SDDocPartnerAddressRefType,
     BPAddrDeterminationTransaction,
     BPRefAddressIDForDocSpcfcAddr,
     PartnerIsOneTimeAccount,
     
     SDDocPartnerAddrIsDocSpecific,
     
     VATRegistration,
     @Semantics.text: true
     UnloadingPointName,
     
     CountryCode,
     CustomerHierarchyType,
     CustIsPrcDetnRlvt,
     CustomerIsRebateRelevant,
     CustomerHierarchyLevel,
     CustomerHierarchyFixedLevel,
     TransportZone,
 
     _PartnerFunction,
     _ContactPerson,
     _WorkforcePersonMappings,
     
     _Address,
     _DfltAddrRprstn,
     _BusinessPartnerAddress,
     _PersonWorkplaceAddrDfltRprstn,
     _BPRefAddressForDocSpcfcAddr
} 
where SDDocumentItem = '000000';
```
