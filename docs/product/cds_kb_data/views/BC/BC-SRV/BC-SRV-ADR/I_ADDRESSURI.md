---
name: I_ADDRESSURI
description: "Addressuri"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - address
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRESSURI

**Addressuri**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AddressID` | ✓ | |  |  | `CHAR(10)` | Address Number |
| `AddressPersonID` | ✓ | |  |  | `CHAR(10)` | Person Number |
| `CommMediumSequenceNumber` | ✓ | |  |  | `NUMC(3)` | Sequence Number |
| `AddressManagementURIType` |  | |  |  | `CHAR(3)` | URI type flag |
| `URLIsCurrentDefault` |  | |  |  | `CHAR(1)` | Flag: this address is the default address |
| `UniformResourceIdentifier` |  | |  |  | `STRI(2048)` |  |
| `_AddressCommunicationRemark` | | ✓ | | | | |
| `_AddressCommunicationUsage` | | ✓ | | | | |
| `_AddressManagementURIType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AddressCommunicationRemark` | `I_AddressCommunicationRemark_2` | [0..*] |
| `_AddressCommunicationUsage` | `I_AddressCommunicationUsage` | [0..*] |
| `_AddressManagementURIType` | `I_AddressManagementURIType` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.privilegedAssociations: ['_AddressCommunicationRemark', '_AddressCommunicationUsage']
@EndUserText.label: 'URI Address'
//@Metadata.allowExtensions: true
//@ObjectModel.representativeKey: 'AddressID'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@VDM.viewType: #COMPOSITE

define view entity I_AddressURI
  as select from AddressURI_TF( P_SAPClient : $session.client )
  association [0..*] to I_AddressCommunicationRemark_2 as _AddressCommunicationRemark on  $projection.AddressID                               = _AddressCommunicationRemark.AddressID
                                                                                      and $projection.AddressPersonID                         = _AddressCommunicationRemark.AddressPersonID
                                                                                      and $projection.CommMediumSequenceNumber                = _AddressCommunicationRemark.CommMediumSequenceNumber
                                                                                      and _AddressCommunicationRemark.CommunicationMediumType = 'URI'

  association [0..*] to I_AddressCommunicationUsage    as _AddressCommunicationUsage  on  $projection.AddressID                              = _AddressCommunicationUsage.AddressID
                                                                                      and $projection.AddressPersonID                        = _AddressCommunicationUsage.AddressPersonID
                                                                                      and $projection.CommMediumSequenceNumber               = _AddressCommunicationUsage.CommMediumSequenceNumber
                                                                                      and _AddressCommunicationUsage.CommunicationMediumType = 'URI'

  association [0..1] to I_AddressManagementURIType     as _AddressManagementURIType   on  $projection.AddressManagementURIType = _AddressManagementURIType.AddressManagementURIType
{
  key AddressID,
  key AddressPersonID,
  key CommMediumSequenceNumber,
      @ObjectModel.foreignKey.association: '_AddressManagementURIType'
      AddressManagementURIType,    
      URLIsCurrentDefault,  
      // URIFieldLengthInChar,  /// Needed for technical reasons only
      UniformResourceIdentifier,

      _AddressCommunicationRemark,
      _AddressCommunicationUsage,
      _AddressManagementURIType
}
```
