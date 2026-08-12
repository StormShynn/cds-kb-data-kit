---
name: I_SRVCDOCPAYMENTMETHOD
description: "Srvcdocpaymentmethod"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - payment
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCPAYMENTMETHOD

**Srvcdocpaymentmethod**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentMethod` | ✓ | | `_PaymentMethod` | `PaymentMethod` |  |  |
| `SalesOrganization` | ✓ | | `_SlsOrgIDDetmCountry` | `SalesOrganization` |  |  |
| `OrgUnitTypeIDConcatenated` | ✓ | | `_SlsOrgIDDetmCountry` | `OrgUnitTypeIDConcatenated` |  |  |
| `Country` |  | | `_PaymentMethod` | `Country` |  |  |
| `_SalesOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrganizationOrgUnit` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISRVPYMTHDS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: {
      internalName: #LOCAL
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Service Transaction Payment Method'
@ObjectModel: {
    modelingPattern:  #ANALYTICAL_DIMENSION,
    representativeKey: 'PaymentMethod',
    supportedCapabilities: [#ANALYTICAL_DIMENSION,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE],
    usageType: {
        serviceQuality: #C,
        sizeCategory: #L,
        dataClass: #CUSTOMIZING
    }
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true


/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_SrvcDocPaymentMethod
  as select from I_PaymentMethod       as _PaymentMethod
    inner join   P_SlsOrgIDDetmCountry as _SlsOrgIDDetmCountry on _SlsOrgIDDetmCountry.Country = _PaymentMethod.Country
  association [0..1] to I_SrvcMgmtOrganizationUnit as _SalesOrganizationOrgUnit on $projection.OrgUnitTypeIDConcatenated = _SalesOrganizationOrgUnit.OrgUnitTypeIDConcatenated
  association [0..1] to I_SalesOrganization        as _SalesOrganization        on $projection.SalesOrganization = _SalesOrganization.SalesOrganization
{
       @ObjectModel.text.association: '_Text'
  key  _PaymentMethod.PaymentMethod                   as PaymentMethod,
       @ObjectModel.foreignKey.association: '_SalesOrganization'
  key  _SlsOrgIDDetmCountry.SalesOrganization         as SalesOrganization,
       @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit'
  key  _SlsOrgIDDetmCountry.OrgUnitTypeIDConcatenated as OrgUnitTypeIDConcatenated,


       _PaymentMethod.Country                         as Country,
       
       @Search.defaultSearchElement: true
       _PaymentMethod._Text[1:Language = $session.system_language and _PaymentMethod.Country = Country and _PaymentMethod.PaymentMethod = PaymentMethod].PaymentMethodDescription,

       //! Associations
       _PaymentMethod._Text,

       _SalesOrganization,
       _SalesOrganizationOrgUnit
}
```
