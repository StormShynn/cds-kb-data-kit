---
name: I_BPCONTACT
description: Bpcontact
app_component: AP-MD-BP
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
  - component:AP-MD-BP
  - lob:Other
---
# I_BPCONTACT

**Bpcontact**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RelationshipNumber` | ✓ | |  | `relnr` | `CHAR(12)` | BP Relationship Number |
| `BusinessPartnerCompany` | ✓ | |  | `partner1` | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerPerson` | ✓ | |  | `partner2` | `CHAR(10)` | Business Partner Number |
| `ValidityEndDate` | ✓ | |  | `date_to` | `DATS(8)` | Validity Date (Valid To) |
| `ValidityStartDate` |  | |  | `date_from` | `DATS(8)` | Validity Date (Valid From) |
| `IsStandardRelationship` |  | |  | `xdfrel` | `CHAR(1)` | Standard Relationship |
| `RelationshipCategory` |  | |  | `reltyp` | `CHAR(6)` | Business Partner Relationship Category |
| `_BusinessPartnerCompany` | | ✓ | | | | |
| `_BusinessPartnerPerson` | | ✓ | | | | |
| `_ContactAddress` | | ✓ | | | | |
| `_ContactRelationship` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartnerCompany` | `I_BusinessPartner` | [1..1] |
| `_BusinessPartnerPerson` | `I_BusinessPartner` | [1..1] |
| `_ContactAddress` | `I_BpContactToAddress` | [0..*] |
| `_ContactRelationship` | `I_BPContactToFuncAndDept` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Business Partner Contact'
//@Analytics.dataCategory: #DIMENSION //or #CUBE or #FACT
@Analytics: {
 dataCategory: #DIMENSION,
 dataExtraction: {
    enabled: true,
   delta.changeDataCapture: {
      automatic: true
   }
 }
}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #CHECK //or #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET,#EXTRACTION_DATA_SOURCE]
@AbapCatalog.sqlViewName: 'IBPCONTACT' //must start with "I"
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey:'RelationshipNumber'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_BPContact
  as select from but050
  association [1..1] to I_BusinessPartner        as _BusinessPartnerCompany on  _BusinessPartnerCompany.BusinessPartner = $projection.BusinessPartnerCompany
  association [1..1] to I_BusinessPartner        as _BusinessPartnerPerson  on  _BusinessPartnerPerson.BusinessPartner = $projection.BusinessPartnerPerson
  association [0..*] to I_BpContactToAddress     as _ContactAddress         on  $projection.RelationshipNumber     = _ContactAddress.RelationshipNumber
                                                                            and $projection.BusinessPartnerCompany = _ContactAddress.BusinessPartnerCompany
                                                                            and $projection.BusinessPartnerPerson  = _ContactAddress.BusinessPartnerPerson

  association [0..1] to I_BPContactToFuncAndDept as _ContactRelationship    on  $projection.RelationshipNumber     = _ContactRelationship.RelationshipNumber
                                                                            and $projection.BusinessPartnerCompany = _ContactRelationship.BusinessPartnerCompany
                                                                            and $projection.BusinessPartnerPerson  = _ContactRelationship.BusinessPartnerPerson
                                                                            and $projection.ValidityEndDate        = _ContactRelationship.ValidityEndDate

{
  key  but050.relnr                                    as             RelationshipNumber,
       @ObjectModel.foreignKey.association: '_BusinessPartnerCompany'
  key  partner1                                        as             BusinessPartnerCompany,
       @ObjectModel.foreignKey.association: '_BusinessPartnerPerson'
  key  partner2                                        as             BusinessPartnerPerson,
        @Semantics.businessDate.to: true
  key  date_to                                         as             ValidityEndDate,
       @Semantics.businessDate.from: true
       date_from                                       as             ValidityStartDate,
       xdfrel                                          as             IsStandardRelationship,
       reltyp                                          as             RelationshipCategory,

       /* Associations */
       _BusinessPartnerCompany,
       _BusinessPartnerPerson,
       //  _BusinessPartnerPerson._CurrentDefaultAddress._StandardAddress,
       _ContactAddress,
       _ContactRelationship
       //_BusinessPartnerPerson._CurrentDefaultAddress._StandardAddress



}
where
  reltyp = 'BUR001'
```
