---
name: I_SALESAREASALESOFFICE
description: Salesareasalesoffice
app_component: SD-CRF-ORG-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-CRF
  - SD-CRF-ORG
  - interface-view
  - component:SD-CRF-ORG-2CL
  - lob:Sales & Distribution
---
# I_SALESAREASALESOFFICE

**Salesareasalesoffice**

| Property | Value |
|---|---|
| App Component | `SD-CRF-ORG-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesOrganization` | `vkorg` |
| key `DistributionChannel` | `vtweg` |
| key `OrganizationDivision` | `spart` |
| key `SalesOffice` | `vkbur` |
| `_SalesOrganization` | *Association* |
| `_DistributionChannel` | *Association* |
| `_OrganizationDivision` | *Association* |
| `_SalesOffice` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_OrganizationDivision` | `I_Division` | [0..1] |
| `_SalesOffice` | `I_SalesOffice` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Sales Offices for Sales Area'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSLSAREAOFFICE'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET  ]
define view I_SalesAreaSalesOffice
as select from tvkbz  

association [0..1] to I_SalesOrganization   as _SalesOrganization   on $projection.SalesOrganization   = _SalesOrganization.SalesOrganization
association [0..1] to I_DistributionChannel as _DistributionChannel on $projection.DistributionChannel = _DistributionChannel.DistributionChannel
association [0..1] to I_Division as _OrganizationDivision on $projection.OrganizationDivision = _OrganizationDivision.Division
association [0..1] to I_SalesOffice as _SalesOffice on $projection.SalesOffice = _SalesOffice.SalesOffice
{
    
    @ObjectModel.foreignKey.association: '_SalesOrganization'
    key vkorg as SalesOrganization,
    
    @ObjectModel.foreignKey.association: '_DistributionChannel'
    key vtweg as DistributionChannel,
    
    @ObjectModel.foreignKey.association: '_OrganizationDivision'
    key spart as OrganizationDivision,
    
    @ObjectModel.foreignKey.association: '_SalesOffice'
    key vkbur as SalesOffice,
    
    _SalesOrganization,
    _DistributionChannel,
    _OrganizationDivision,
    _SalesOffice
};
```
