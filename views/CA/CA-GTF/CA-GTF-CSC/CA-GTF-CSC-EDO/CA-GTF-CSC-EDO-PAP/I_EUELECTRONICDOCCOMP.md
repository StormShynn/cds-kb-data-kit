---
name: I_EUELECTRONICDOCCOMP
description: Euelectronicdoccomp
app_component: CA-GTF-CSC-EDO-PAP
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-PAP
  - lob:Cross-Application Components
---
# I_EUELECTRONICDOCCOMP

**Euelectronicdoccomp**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-PAP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `bukrs` |
| key `EU_EDocCommChannel` | `comm_channel` |
| `ElectronicDocPartyIdType` | `party_id_type` |
| `_CompanyCode` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Company Identification Type'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #CUSTOMIZING
 },
  supportedCapabilities: [#SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE

}
@VDM:{
viewType: #BASIC
}
define root view entity I_EUElectronicDocComp
  as select from edoeucomp
  association [1..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode


{

      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [
      { entity:  { name   : 'I_CompanyCodeVH',
                   element: 'CompanyCode' }
       }]
  key bukrs         as CompanyCode,
      @Consumption.valueHelpDefinition: [
      { entity:  { name   : 'I_EUElectronicDocCommChannelVH',
                   element: 'EU_EDocCommChannel' }
       }]
  key comm_channel  as EU_EDocCommChannel,
      party_id_type as ElectronicDocPartyIdType,

      _CompanyCode

}
```
