---
name: I_CAPROVIDERCONTRACTTECHRSCE
description: Caprovidercontracttechrsce
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - contract
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAPROVIDERCONTRACTTECHRSCE

**Caprovidercontracttechrsce**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CAProviderContract` | `ProviderContract` |
| key `CATechnicalResourceGroup` | `CATechnicalResourceGroup` |
| key `CATechnicalResourceIDType` | `CATechnicalResourceIDType` |
| key `CATechnicalResourceID` | `CATechnicalResourceID` |
| key `CATechRsceValidFromDateTime` | `CATechRsceValidFromDateTime` |
| `CATechRsceValidToDateTime` | `CATechRsceValidToDateTime` |
| `CANormalizedTechnicalResource` | `CANormalizedTechnicalResource` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangeTime` | `LastChangeTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `_PrvdrContr` | *Association* |
| `_TechRsceIDType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrvdrContr` | `I_CAProviderContractHeader` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Kennung am Provider-Vertrag'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ICAPRVDRCONTRTR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking : #REQUIRED

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_CAProviderContractTechRsce
  as select from I_ProviderContractTechRsce
  association [1..1] to I_CAProviderContractHeader as _PrvdrContr on $projection.CAProviderContract = _PrvdrContr.CAProviderContract
{

      @ObjectModel.foreignKey.association: '_PrvdrContr'
  key ProviderContract as CAProviderContract,
  key CATechnicalResourceGroup,
      @ObjectModel.foreignKey.association: '_TechRsceIDType'
  key CATechnicalResourceIDType,
  key CATechnicalResourceID,
  key CATechRsceValidFromDateTime,
      CATechRsceValidToDateTime,
      CANormalizedTechnicalResource,

      // Administrative Data
      CreationDate,
      CreationTime,
      CreatedByUser,
      LastChangeDate,
      LastChangeTime,
      LastChangedByUser,

      // valfr_locl,
      // valto_locl,

      _PrvdrContr,
      _TechRsceIDType

}
```
