---
name: I_SDDOCUMENTITEMPARTNER
description: "Sddocumentitempartner"
app_component: SD-BF-PD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-PD
  - interface-view
  - document
  - item-level
  - partner
  - component:SD-BF-PD-2CL
  - lob:Sales & Distribution
---
# I_SDDOCUMENTITEMPARTNER

**Sddocumentitempartner**

| Property | Value |
|---|---|
| App Component | `SD-BF-PD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SDDocument` | ✓ | |  |  |  |  |
| `SDDocumentItem` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `AddressPersonID` |  | |  |  |  |  |
| `AddressObjectType` |  | |  |  |  |  |
| `SDDocPartnerAddressRefType` |  | |  |  |  |  |
| `BPAddrDeterminationTransaction` |  | |  |  |  |  |
| `BPRefAddressIDForDocSpcfcAddr` |  | |  |  |  |  |
| `PartnerIsOneTimeAccount` |  | |  |  |  |  |
| `SDDocPartnerAddrIsDocSpecific` |  | |  |  |  |  |
| `CountryCode` |  | |  |  |  |  |
| `TransportZone` |  | |  |  |  |  |
| `VATRegistration` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `_PartnerFunction` | | ✓ | | | | |
| `_WorkforcePersonMappings` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |
| `_DfltAddrRprstn` | | ✓ | | | | |
| `_BusinessPartnerAddress` | | ✓ | | | | |
| `_PersonWorkplaceAddrDfltRprstn` | | ✓ | | | | |
| `_BPRefAddressForDocSpcfcAddr` | | ✓ | | | | |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'SD Document Item Partner'
@VDM.viewType: #BASIC
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #REQUIRED,
  privilegedAssociations: [ '_Address', '_DfltAddrRprstn', '_PersonWorkplaceAddrDfltRprstn' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDDOCITEMPART',
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
define view I_SDDocumentItemPartner
as select from I_SDDocumentCompletePartners
{
 key SDDocument,
 key SDDocumentItem,
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
     CountryCode,
     TransportZone,
     VATRegistration,
     @Semantics.text: true
     UnloadingPointName,
       
     _PartnerFunction,
     _WorkforcePersonMappings,
     
     _Address,
     _DfltAddrRprstn,
     _BusinessPartnerAddress,
     _PersonWorkplaceAddrDfltRprstn,
     _BPRefAddressForDocSpcfcAddr
}
where SDDocumentItem != '000000';
```
