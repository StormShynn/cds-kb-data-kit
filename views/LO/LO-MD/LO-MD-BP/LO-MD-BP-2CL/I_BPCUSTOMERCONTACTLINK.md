---
name: I_BPCUSTOMERCONTACTLINK
description: Bpcustomercontactlink
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - customer
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Customer
---
# I_BPCUSTOMERCONTACTLINK

**Bpcustomercontactlink**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerUUID` | ✓ | |  | `partner_guid` |  |  |
| `PersonUUID` | ✓ | |  | `person_guid` |  |  |
| `CustomerContact` | ✓ | |  | `customer_cont` |  |  |
| `CreatedByUser` |  | |  | `cruser` |  |  |
| `CreationDate` |  | |  | `crdat` |  |  |
| `CreationTime` |  | |  | `crtim` |  |  |
| `_CustomerToBusinessPartner` | | ✓ | | | | |
| `_BusinessPartnerCompany` | | ✓ | | | | |
| `_BusinessPartnerPerson` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerToBusinessPartner` | `I_Customer_to_BusinessPartner` | [0..1] |
| `_BusinessPartnerCompany` | `I_BusinessPartner` | [1..1] |
| `_BusinessPartnerPerson` | `I_BusinessPartner` | [1..1] |
| `_ContactPerson` | `I_ContactPerson` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPCUSTCNTCTLINK'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Business Partner Customer Contact Link'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'CustomerContactBusinessPartner'
@AccessControl.personalData.blocking: #REQUIRED

@Metadata.ignorePropagatedAnnotations: true


@Analytics: {
  dataCategory: #DIMENSION,       
  dataExtraction: {
   enabled: true,
    delta.changeDataCapture: {
      automatic: true
    }
  }
}
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'PersonUUID'                                          
@Metadata.allowExtensions: true                                    
@AccessControl.personalData.blockingIndicator:'IsBusinessPurposeCompleted'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_BPCustomerContactLink
  as select from cvi_cust_ct_link as BPCustomerContactLink

  association [0..1] to I_Customer_to_BusinessPartner as _CustomerToBusinessPartner on $projection.BusinessPartnerUUID = _CustomerToBusinessPartner.BusinessPartnerUUID

  association [1..1] to I_BusinessPartner     as _BusinessPartnerCompany on  $projection.BusinessPartnerUUID = _BusinessPartnerCompany.BusinessPartnerUUID
  
  association [1..1] to I_BusinessPartner as _BusinessPartnerPerson  on $projection.PersonUUID = _BusinessPartnerPerson.BusinessPartnerUUID

  association [1..1] to I_ContactPerson   as _ContactPerson          on $projection.CustomerContact = _ContactPerson.ContactPerson

{
  @ObjectModel.foreignKey.association: '_CustomerToBusinessPartner'
  key BPCustomerContactLink.partner_guid  as BusinessPartnerUUID,
  key BPCustomerContactLink.person_guid   as PersonUUID,
  key BPCustomerContactLink.customer_cont as CustomerContact,
      BPCustomerContactLink.cruser        as CreatedByUser,
      BPCustomerContactLink.crdat         as CreationDate,
      BPCustomerContactLink.crtim         as CreationTime,

      _CustomerToBusinessPartner,
      _BusinessPartnerCompany,
      _BusinessPartnerPerson,
      _ContactPerson
}
```
